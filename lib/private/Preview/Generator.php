<?php
/**
 * @copyright Copyright (c) 2016, Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Elijah Martin-Merrill <elijah@nyp-itsours.com>
 * @author J0WI <J0WI@users.noreply.github.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Robin Appelman <robin@icewind.nl>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Scott Dutton <scott@exussum.co.uk>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OC\Preview;

use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\File;
use OCP\Files\IAppData;
use OCP\Files\InvalidPathException;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\IConfig;
use OCP\IImage;
use OCP\IPreview;
use OCP\IStreamImage;
use OCP\Preview\BeforePreviewFetchedEvent;
use OCP\Preview\IProviderV2;
use OCP\Preview\IVersionedPreviewFile;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class Generator {

	/** @var IPreview */
	private $previewManager;
	/** @var IConfig */
	private $config;
	/** @var IAppData */
	private $appData;
	/** @var GeneratorHelper */
	private $helper;
	/** @var EventDispatcherInterface */
	private $legacyEventDispatcher;
	/** @var IEventDispatcher */
	private $eventDispatcher;

	public function __construct(
		IConfig $config,
		IPreview $previewManager,
		IAppData $appData,
		GeneratorHelper $helper,
		EventDispatcherInterface $legacyEventDispatcher,
		IEventDispatcher $eventDispatcher
	) {
		$this->config = $config;
		$this->previewManager = $previewManager;
		$this->appData = $appData;
		$this->helper = $helper;
		$this->legacyEventDispatcher = $legacyEventDispatcher;
		$this->eventDispatcher = $eventDispatcher;
	}

	/**
	 * Returns a preview of a file
	 *
	 * The cache is searched first and if nothing usable was found then a preview is
	 * generated by one of the providers
	 *
	 * @param File $file
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mode
	 * @param string $mimeType
	 * @return ISimpleFile
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	public function getPreview(File $file, $width = -1, $height = -1, $crop = false, $mode = IPreview::MODE_FILL, $mimeType = null) {
		$specification = [
			'width' => $width,
			'height' => $height,
			'crop' => $crop,
			'mode' => $mode,
		];

		$this->legacyEventDispatcher->dispatch(
			IPreview::EVENT,
			new GenericEvent($file, $specification)
		);
		$this->eventDispatcher->dispatchTyped(new BeforePreviewFetchedEvent(
			$file
		));

		// since we only ask for one preview, and the generate method return the last one it created, it returns the one we want
		return $this->generatePreviews($file, [$specification], $mimeType);
	}

	/**
	 * Generates previews of a file
	 *
	 * @param File $file
	 * @param non-empty-array $specifications
	 * @param string $mimeType
	 * @return ISimpleFile the last preview that was generated
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	public function generatePreviews(File $file, array $specifications, $mimeType = null) {
		//Make sure that we can read the file
		if (!$file->isReadable()) {
			throw new NotFoundException('Cannot read file');
		}

		if ($mimeType === null) {
			$mimeType = $file->getMimeType();
		}

		$previewFolder = $this->getPreviewFolder($file);

		$previewVersion = '';
		if ($file instanceof IVersionedPreviewFile) {
			$previewVersion = $file->getPreviewVersion() . '-';
		}

		// If imaginary is enabled, and we request a small thumbnail,
		// let's not generate the max preview for performance reasons
		if (count($specifications) === 1
			&& ($specifications[0]['width'] <= 256 || $specifications[0]['height'] <= 256)
			&& preg_match(Imaginary::supportedMimeTypes(), $mimeType)
			&& $this->config->getSystemValueString('preview_imaginary_url', 'invalid') !== 'invalid') {
			$crop = $specifications[0]['crop'] ?? false;
			$preview = $this->getSmallImagePreview($previewFolder, $file, $mimeType, $previewVersion, $crop);

			if ($preview->getSize() === 0) {
				$preview->delete();
				throw new NotFoundException('Cached preview size 0, invalid!');
			}

			return $preview;
		}

		// Get the max preview and infer the max preview sizes from that
		$maxPreview = $this->getMaxPreview($previewFolder, $file, $mimeType, $previewVersion);
		$maxPreviewImage = null; // only load the image when we need it
		if ($maxPreview->getSize() === 0) {
			$maxPreview->delete();
			throw new NotFoundException('Max preview size 0, invalid!');
		}

		[$maxWidth, $maxHeight] = $this->getPreviewSize($maxPreview, $previewVersion);

		$preview = null;
		// List every existing preview first instead of trying to find them one by one
		$previewFiles = $previewFolder->getDirectoryListing();

		foreach ($specifications as $specification) {
			$width = $specification['width'] ?? -1;
			$height = $specification['height'] ?? -1;
			$crop = $specification['crop'] ?? false;
			$mode = $specification['mode'] ?? IPreview::MODE_FILL;

			// If both width and height are -1 we just want the max preview
			if ($width === -1 && $height === -1) {
				$width = $maxWidth;
				$height = $maxHeight;
			}

			// Calculate the preview size
			[$width, $height] = $this->calculateSize($width, $height, $crop, $mode, $maxWidth, $maxHeight);

			// No need to generate a preview that is just the max preview
			if ($width === $maxWidth && $height === $maxHeight) {
				// ensure correct return value if this was the last one
				$preview = $maxPreview;
				continue;
			}

			// Try to get a cached preview. Else generate (and store) one
			try {
				try {
					$preview = $this->getCachedPreview($previewFiles, $width, $height, $crop, $maxPreview->getMimeType(), $previewVersion);
				} catch (NotFoundException $e) {
					if (!$this->previewManager->isMimeSupported($mimeType)) {
						throw new NotFoundException();
					}

					if ($maxPreviewImage === null) {
						$maxPreviewImage = $this->helper->getImage($maxPreview);
					}

					$preview = $this->generatePreview($previewFolder, $maxPreviewImage, $width, $height, $crop, $maxWidth, $maxHeight, $previewVersion);
					// New file, augment our array
					$previewFiles[] = $preview;
				}
			} catch (\InvalidArgumentException $e) {
				throw new NotFoundException("", 0, $e);
			}

			if ($preview->getSize() === 0) {
				$preview->delete();
				throw new NotFoundException('Cached preview size 0, invalid!');
			}
		}
		assert($preview !== null);

		// Free memory being used by the embedded image resource.  Without this the image is kept in memory indefinitely.
		// Garbage Collection does NOT free this memory.  We have to do it ourselves.
		if ($maxPreviewImage instanceof \OCP\Image) {
			$maxPreviewImage->destroy();
		}

		return $preview;
	}

	/**
	 * Generate a small image straight away without generating a max preview first
	 * Preview generated is 256x256
	 *
	 * @throws NotFoundException
	 */
	private function getSmallImagePreview(ISimpleFolder $previewFolder, File $file, string $mimeType, string $prefix, bool $crop): ISimpleFile {
		$nodes = $previewFolder->getDirectoryListing();

		foreach ($nodes as $node) {
			$name = $node->getName();
			if (($prefix === '' || str_starts_with($name, $prefix))) {
				// Prefix match
				if (str_starts_with($name, $prefix . '256-256-crop') && $crop) {
					// Cropped image
					return $node;
				}

				if (str_starts_with($name, $prefix . '256-256.') && !$crop) {
					// Uncropped image
					return $node;
				}
			}
		}

		$previewProviders = $this->previewManager->getProviders();
		foreach ($previewProviders as $supportedMimeType => $providers) {
			// Filter out providers that does not support this mime
			if (!preg_match($supportedMimeType, $mimeType)) {
				continue;
			}

			foreach ($providers as $providerClosure) {
				$provider = $this->helper->getProvider($providerClosure);
				if (!($provider instanceof IProviderV2)) {
					continue;
				}

				if (!$provider->isAvailable($file)) {
					continue;
				}

				$preview = $this->helper->getThumbnail($provider, $file, 256, 256, $crop);

				if (!($preview instanceof IImage)) {
					continue;
				}

				// Try to get the extension.
				try {
					$ext = $this->getExtention($preview->dataMimeType());
				} catch (\InvalidArgumentException $e) {
					// Just continue to the next iteration if this preview doesn't have a valid mimetype
					continue;
				}

				$path = $this->generatePath(256, 256, $crop, $preview->dataMimeType(), $prefix);
				try {
					$file = $previewFolder->newFile($path);
					if ($preview instanceof IStreamImage) {
						$file->putContent($preview->resource());
					} else {
						$file->putContent($preview->data());
					}
				} catch (NotPermittedException $e) {
					throw new NotFoundException();
				}

				return $file;
			}
		}

		throw new NotFoundException('No provider successfully handled the preview generation');
	}

	/**
	 * @param ISimpleFolder $previewFolder
	 * @param File $file
	 * @param string $mimeType
	 * @param string $prefix
	 * @return ISimpleFile
	 * @throws NotFoundException
	 */
	private function getMaxPreview(ISimpleFolder $previewFolder, File $file, $mimeType, $prefix) {
		$nodes = $previewFolder->getDirectoryListing();

		foreach ($nodes as $node) {
			$name = $node->getName();
			if (($prefix === '' || strpos($name, $prefix) === 0) && strpos($name, 'max')) {
				return $node;
			}
		}

		$previewProviders = $this->previewManager->getProviders();
		foreach ($previewProviders as $supportedMimeType => $providers) {
			// Filter out providers that does not support this mime
			if (!preg_match($supportedMimeType, $mimeType)) {
				continue;
			}

			foreach ($providers as $providerClosure) {
				$provider = $this->helper->getProvider($providerClosure);
				if (!($provider instanceof IProviderV2)) {
					continue;
				}

				if (!$provider->isAvailable($file)) {
					continue;
				}

				$maxWidth = $this->config->getSystemValueInt('preview_max_x', 4096);
				$maxHeight = $this->config->getSystemValueInt('preview_max_y', 4096);

				$preview = $this->helper->getThumbnail($provider, $file, $maxWidth, $maxHeight);

				if (!($preview instanceof IImage)) {
					continue;
				}

				// Try to get the extention.
				try {
					$ext = $this->getExtention($preview->dataMimeType());
				} catch (\InvalidArgumentException $e) {
					// Just continue to the next iteration if this preview doesn't have a valid mimetype
					continue;
				}

				$path = $prefix . (string)$preview->width() . '-' . (string)$preview->height() . '-max.' . $ext;
				try {
					$file = $previewFolder->newFile($path);
					if ($preview instanceof IStreamImage) {
						$file->putContent($preview->resource());
					} else {
						$file->putContent($preview->data());
					}
				} catch (NotPermittedException $e) {
					throw new NotFoundException();
				}

				return $file;
			}
		}

		throw new NotFoundException();
	}

	/**
	 * @param ISimpleFile $file
	 * @param string $prefix
	 * @return int[]
	 */
	private function getPreviewSize(ISimpleFile $file, string $prefix = '') {
		$size = explode('-', substr($file->getName(), strlen($prefix)));
		return [(int)$size[0], (int)$size[1]];
	}

	/**
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mimeType
	 * @param string $prefix
	 * @return string
	 */
	private function generatePath($width, $height, $crop, $mimeType, $prefix) {
		$path = $prefix . (string)$width . '-' . (string)$height;
		if ($crop) {
			$path .= '-crop';
		}

		$ext = $this->getExtention($mimeType);
		$path .= '.' . $ext;
		return $path;
	}


	/**
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mode
	 * @param int $maxWidth
	 * @param int $maxHeight
	 * @return int[]
	 */
	private function calculateSize($width, $height, $crop, $mode, $maxWidth, $maxHeight) {

		/*
		 * If we are not cropping we have to make sure the requested image
		 * respects the aspect ratio of the original.
		 */
		if (!$crop) {
			$ratio = $maxHeight / $maxWidth;

			if ($width === -1) {
				$width = $height / $ratio;
			}
			if ($height === -1) {
				$height = $width * $ratio;
			}

			$ratioH = $height / $maxHeight;
			$ratioW = $width / $maxWidth;

			/*
			 * Fill means that the $height and $width are the max
			 * Cover means min.
			 */
			if ($mode === IPreview::MODE_FILL) {
				if ($ratioH > $ratioW) {
					$height = $width * $ratio;
				} else {
					$width = $height / $ratio;
				}
			} elseif ($mode === IPreview::MODE_COVER) {
				if ($ratioH > $ratioW) {
					$width = $height / $ratio;
				} else {
					$height = $width * $ratio;
				}
			}
		}

		if ($height !== $maxHeight && $width !== $maxWidth) {
			/*
			 * Scale to the nearest power of four
			 */
			$pow4height = 4 ** ceil(log($height) / log(4));
			$pow4width = 4 ** ceil(log($width) / log(4));

			// Minimum size is 64
			$pow4height = max($pow4height, 64);
			$pow4width = max($pow4width, 64);

			$ratioH = $height / $pow4height;
			$ratioW = $width / $pow4width;

			if ($ratioH < $ratioW) {
				$width = $pow4width;
				$height /= $ratioW;
			} else {
				$height = $pow4height;
				$width /= $ratioH;
			}
		}

		/*
		 * Make sure the requested height and width fall within the max
		 * of the preview.
		 */
		if ($height > $maxHeight) {
			$ratio = $height / $maxHeight;
			$height = $maxHeight;
			$width /= $ratio;
		}
		if ($width > $maxWidth) {
			$ratio = $width / $maxWidth;
			$width = $maxWidth;
			$height /= $ratio;
		}

		return [(int)round($width), (int)round($height)];
	}

	/**
	 * @param ISimpleFolder $previewFolder
	 * @param ISimpleFile $maxPreview
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param int $maxWidth
	 * @param int $maxHeight
	 * @param string $prefix
	 * @return ISimpleFile
	 * @throws NotFoundException
	 * @throws \InvalidArgumentException if the preview would be invalid (in case the original image is invalid)
	 */
	private function generatePreview(ISimpleFolder $previewFolder, IImage $maxPreview, $width, $height, $crop, $maxWidth, $maxHeight, $prefix) {
		$preview = $maxPreview;
		if (!$preview->valid()) {
			throw new \InvalidArgumentException('Failed to generate preview, failed to load image');
		}

		if ($crop) {
			if ($height !== $preview->height() && $width !== $preview->width()) {
				//Resize
				$widthR = $preview->width() / $width;
				$heightR = $preview->height() / $height;

				if ($widthR > $heightR) {
					$scaleH = $height;
					$scaleW = $maxWidth / $heightR;
				} else {
					$scaleH = $maxHeight / $widthR;
					$scaleW = $width;
				}
				$preview = $preview->preciseResizeCopy((int)round($scaleW), (int)round($scaleH));
			}
			$cropX = (int)floor(abs($width - $preview->width()) * 0.5);
			$cropY = (int)floor(abs($height - $preview->height()) * 0.5);
			$preview = $preview->cropCopy($cropX, $cropY, $width, $height);
		} else {
			$preview = $maxPreview->resizeCopy(max($width, $height));
		}


		$path = $this->generatePath($width, $height, $crop, $preview->dataMimeType(), $prefix);
		try {
			$file = $previewFolder->newFile($path);
			$file->putContent($preview->data());
		} catch (NotPermittedException $e) {
			throw new NotFoundException();
		}

		return $file;
	}

	/**
	 * @param array $files Array of FileInfo, as the result of getDirectoryListing()
	 * @param int $width
	 * @param int $height
	 * @param bool $crop
	 * @param string $mimeType
	 * @param string $prefix
	 * @return ISimpleFile
	 *
	 * @throws NotFoundException
	 */
	private function getCachedPreview($files, $width, $height, $crop, $mimeType, $prefix) {
		$path = $this->generatePath($width, $height, $crop, $mimeType, $prefix);
		foreach ($files as $file) {
			if ($file->getName() === $path) {
				return $file;
			}
		}
		throw new NotFoundException();
	}

	/**
	 * Get the specific preview folder for this file
	 *
	 * @param File $file
	 * @return ISimpleFolder
	 *
	 * @throws InvalidPathException
	 * @throws NotFoundException
	 * @throws NotPermittedException
	 */
	private function getPreviewFolder(File $file) {
		// Obtain file id outside of try catch block to prevent the creation of an existing folder
		$fileId = (string)$file->getId();

		try {
			$folder = $this->appData->getFolder($fileId);
		} catch (NotFoundException $e) {
			$folder = $this->appData->newFolder($fileId);
		}

		return $folder;
	}

	/**
	 * @param string $mimeType
	 * @return null|string
	 * @throws \InvalidArgumentException
	 */
	private function getExtention($mimeType) {
		switch ($mimeType) {
			case 'image/png':
				return 'png';
			case 'image/jpeg':
				return 'jpg';
			case 'image/gif':
				return 'gif';
			default:
				throw new \InvalidArgumentException('Not a valid mimetype: "' . $mimeType . '"');
		}
	}
}
