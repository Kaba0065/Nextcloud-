<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Christoph Wurst <christoph@owncloud.com>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Lukas Reschke <lukas@statuscode.ch>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @author Vincent Petry <pvince81@owncloud.com>
 * @author Felix Nüsse <felix.nuesse@t-online.de>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\Files\Controller;

use OCA\Files\Activity\Helper;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\App\IAppManager;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

/**
 * Class ViewController
 *
 * @package OCA\Files\Controller
 */
class ViewController extends Controller {
	/** @var string */
	protected $appName;
	/** @var IRequest */
	protected $request;
	/** @var IURLGenerator */
	protected $urlGenerator;
	/** @var IL10N */
	protected $l10n;
	/** @var IConfig */
	protected $config;
	/** @var EventDispatcherInterface */
	protected $eventDispatcher;
	/** @var IUserSession */
	protected $userSession;
	/** @var IAppManager */
	protected $appManager;
	/** @var IRootFolder */
	protected $rootFolder;
	/** @var Helper */
	protected $activityHelper;

	public function __construct(string $appName,
								IRequest $request,
								IURLGenerator $urlGenerator,
								IL10N $l10n,
								IConfig $config,
								EventDispatcherInterface $eventDispatcherInterface,
								IUserSession $userSession,
								IAppManager $appManager,
								IRootFolder $rootFolder,
								Helper $activityHelper
	) {
		parent::__construct($appName, $request);
		$this->appName = $appName;
		$this->request = $request;
		$this->urlGenerator = $urlGenerator;
		$this->l10n = $l10n;
		$this->config = $config;
		$this->eventDispatcher = $eventDispatcherInterface;
		$this->userSession = $userSession;
		$this->appManager = $appManager;
		$this->rootFolder = $rootFolder;
		$this->activityHelper = $activityHelper;
	}

	/**
	 * @param string $appName
	 * @param string $scriptName
	 * @return string
	 */
	protected function renderScript($appName, $scriptName) {
		$content = '';
		$appPath = \OC_App::getAppPath($appName);
		$scriptPath = $appPath . '/' . $scriptName;
		if (file_exists($scriptPath)) {
			// TODO: sanitize path / script name ?
			ob_start();
			include $scriptPath;
			$content = ob_get_contents();
			@ob_end_clean();
		}

		return $content;
	}

	/**
	 * FIXME: Replace with non static code
	 *
	 * @return array
	 * @throws \OCP\Files\NotFoundException
	 */
	protected function getStorageInfo() {
		$dirInfo = \OC\Files\Filesystem::getFileInfo('/', false);

		return \OC_Helper::getStorageInfo('/', $dirInfo);
	}

	/**
	 * @NoCSRFRequired
	 * @NoAdminRequired
	 *
	 * @param string $dir
	 * @param string $view
	 * @param string $fileid
	 * @return TemplateResponse|RedirectResponse
	 */
	public function index($dir = '', $view = '', $fileid = null, $fileNotFound = false) {
		if ($fileid !== null) {
			try {
				return $this->showFile($fileid);
			} catch (NotFoundException $e) {
				return new RedirectResponse($this->urlGenerator->linkToRoute('files.view.index', ['fileNotFound' => true]));
			}
		}

		$nav = new \OCP\Template('files', 'appnavigation', '');

		// Load the files we need
		\OCP\Util::addStyle('files', 'merged');
		\OCP\Util::addScript('files', 'merged-index');

		// mostly for the home storage's free space
		// FIXME: Make non static
		$storageInfo = $this->getStorageInfo();

		$user = $this->userSession->getUser()->getUID();

		// Get all the user favorites to create a submenu
		try {
			$favElements = $this->activityHelper->getFavoriteFilePaths($this->userSession->getUser()->getUID());
		} catch (\RuntimeException $e) {
			$favElements['folders'] = null;
		}

		$collapseClasses = '';
		if (count($favElements['folders']) > 0) {
			$collapseClasses = 'collapsible';
		}

		$favoritesSublistArray = Array();

		$navBarPositionPosition = 6;
		$currentCount = 0;
		foreach ($favElements['folders'] as $dir) {

			$id = substr($dir, strrpos($dir, '/') + 1, strlen($dir));
			$link = $this->urlGenerator->linkToRoute('files.view.index', ['dir' => $dir, 'view' => 'files']);
			$sortingValue = ++$currentCount;
			$element = [
				'id' => str_replace('/', '-', $dir),
				'view' => 'files',
				'href' => $link,
				'dir' => $dir,
				'order' => $navBarPositionPosition,
				'folderPosition' => $sortingValue,
				'name' => $id,
				'icon' => 'files',
				'quickaccesselement' => 'true'
			];

			array_push($favoritesSublistArray, $element);
			$navBarPositionPosition++;
		}

		$navItems = \OCA\Files\App::getNavigationManager()->getAll();

		// add the favorites entry in menu
		$navItems['favorites']['sublist'] = $favoritesSublistArray;
		$navItems['favorites']['classes'] = $collapseClasses;

		// parse every menu and add the expandedState user value
		foreach ($navItems as $key => $item) {
			if (isset($item['expandedState'])) {
				$navItems[$key]['defaultExpandedState'] = $this->config->getUserValue($this->userSession->getUser()->getUID(), 'files', $item['expandedState'], '0') === '1';
			}
		}

		$nav->assign('navigationItems', $navItems);

		$nav->assign('usage', $this->showAsPartsOfUnit($storageInfo['used'],  $this->getEnding($storageInfo['total'])));
		if ($storageInfo['quota'] === \OCP\Files\FileInfo::SPACE_UNLIMITED) {
			$totalSpace = $this->l10n->t('Unlimited');
			$nav->assign('usage', $this->reduceStorageSizeBySensibleBoundaries($storageInfo['used']));
		} else {
			$totalSpace = $this->reduceStorageSizeBySensibleBoundaries($storageInfo['total']);
		}
		$nav->assign('total_space', $totalSpace);
		$nav->assign('quota', $storageInfo['quota']);
		$nav->assign('usage_relative', $storageInfo['relative']);

		$contentItems = [];

		// render the container content for every navigation item
		foreach ($navItems as $item) {
			$content = '';
			if (isset($item['script'])) {
				$content = $this->renderScript($item['appname'], $item['script']);
			}
			// parse submenus
			if (isset($item['sublist'])) {
				foreach ($item['sublist'] as $subitem) {
					$subcontent = '';
					if (isset($subitem['script'])) {
						$subcontent = $this->renderScript($subitem['appname'], $subitem['script']);
					}
					$contentItems[$subitem['id']] = [
						'id' => $subitem['id'],
						'content' => $subcontent
					];
				}
			}
			$contentItems[$item['id']] = [
				'id' => $item['id'],
				'content' => $content
			];
		}

		$event = new GenericEvent(null, ['hiddenFields' => []]);
		$this->eventDispatcher->dispatch('OCA\Files::loadAdditionalScripts', $event);

		$params = [];
		$params['usedSpacePercent'] = (int)$storageInfo['relative'];
		$params['owner'] = $storageInfo['owner'];
		$params['ownerDisplayName'] = $storageInfo['ownerDisplayName'];
		$params['isPublic'] = false;
		$params['allowShareWithLink'] = $this->config->getAppValue('core', 'shareapi_allow_links', 'yes');
		$params['defaultFileSorting'] = $this->config->getUserValue($user, 'files', 'file_sorting', 'name');
		$params['defaultFileSortingDirection'] = $this->config->getUserValue($user, 'files', 'file_sorting_direction', 'asc');
		$showHidden = (bool)$this->config->getUserValue($this->userSession->getUser()->getUID(), 'files', 'show_hidden', false);
		$params['showHiddenFiles'] = $showHidden ? 1 : 0;
		$params['fileNotFound'] = $fileNotFound ? 1 : 0;
		$params['appNavigation'] = $nav;
		$params['appContents'] = $contentItems;
		$params['hiddenFields'] = $event->getArgument('hiddenFields');

		$response = new TemplateResponse(
			$this->appName,
			'index',
			$params
		);
		$policy = new ContentSecurityPolicy();
		$policy->addAllowedFrameDomain('\'self\'');
		$response->setContentSecurityPolicy($policy);

		return $response;
	}

	/**
	 * Redirects to the file list and highlight the given file id
	 *
	 * @param string $fileId file id to show
	 * @return RedirectResponse redirect response or not found response
	 * @throws \OCP\Files\NotFoundException
	 */
	private function showFile($fileId) {
		$uid = $this->userSession->getUser()->getUID();
		$baseFolder = $this->rootFolder->getUserFolder($uid);
		$files = $baseFolder->getById($fileId);
		$params = [];

		if (empty($files) && $this->appManager->isEnabledForUser('files_trashbin')) {
			$baseFolder = $this->rootFolder->get($uid . '/files_trashbin/files/');
			$files = $baseFolder->getById($fileId);
			$params['view'] = 'trashbin';
		}

		if (!empty($files)) {
			$file = current($files);
			if ($file instanceof Folder) {
				// set the full path to enter the folder
				$params['dir'] = $baseFolder->getRelativePath($file->getPath());
			} else {
				// set parent path as dir
				$params['dir'] = $baseFolder->getRelativePath($file->getParent()->getPath());
				// and scroll to the entry
				$params['scrollto'] = $file->getName();
			}

			return new RedirectResponse($this->urlGenerator->linkToRoute('files.view.index', $params));
		}
		throw new \OCP\Files\NotFoundException();
	}

	/**
	 * Cuts of an int containing the amount of bytes of a given size, to a sensible way. It converts the bytecount to a human readable size, and then cuts it down under a certain threshhold.
	 *
	 * @param int $storage storagevalue to be cut off
	 * @return int human readable filesize which is reduced to a sensible value.
	 */
	private function reduceStorageSizeBySensibleBoundaries($storage) {
		$reducedStorageSize = \OC_Helper::humanFileSize($storage);
		$ending = $this->getEnding($storage);

		if ($storage > 10485760 && $storage < 1073741824) { //Over 10MB under 1GB
			$reducedStorageSize = round($reducedStorageSize);
		} else if ($storage > 10737418240 && $storage < 1099511531399) { //Over 10GB under 1TB
			$reducedStorageSize = round($reducedStorageSize);
		} else {
			return $reducedStorageSize;
		}

		return $reducedStorageSize . " " . $ending;
	}

	/**
	 * Returns either '<0.1' or a readable Size, depending on the unit. If the given size is smaller than 10% of the given unit, '<0.1' is returned.
	 *
	 * @param $bytes bytes of the used space
	 * @param $unit unit of the total assigned space
	 * @return String Size
	 */
	private function showAsPartsOfUnit($bytes,$unit) {

		if ($unit == "KB") {
			if ($bytes < 102) {
				return "<0.1";
			}
		}

		if ($unit == "MB") {
			if ($bytes < 104857) {
				return "<0.1";
			}
		}

		if ($unit == "GB") {
			if ($bytes < 107374182) {
				return "<0.1";
			}
		}

		if ($unit == "TB") {
			if ($bytes < 109951162777) {
				return "<0.1";
			}
		}

		return $this->stripEnding($bytes);
	}

	/**
	 * Returns the humanFileSize, but without the unit.
	 *
	 * @param $bytes bytes
	 * @return String Size
	 */
	private function stripEnding($bytes) {
		$sizeHuman = \OC_Helper::humanFileSize($bytes);
		return trim(substr($sizeHuman, 0, (strrpos($sizeHuman, "B") - 1)));
	}

	/**
	 * Returns the unit of humanFileSize
	 *
	 * @param $bytes bytes
	 * @return String Unit
	 */
	private function getEnding($bytes) {
		$sizeHuman = \OC_Helper::humanFileSize($bytes);
		return trim(substr($sizeHuman, (strrpos($sizeHuman, "B") - 1), strlen($sizeHuman)));
	}

}
