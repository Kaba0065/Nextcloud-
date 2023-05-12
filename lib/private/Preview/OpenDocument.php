<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Côme Chilliet <come.chilliet@nextcloud.com>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Robin Appelman <robin@icewind.nl>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OC\Preview;

//.odt, .ott, .oth, .odm, .odg, .otg, .odp, .otp, .ods, .ots, .odc, .odf, .odb, .odi, .oxt
use OCP\Files\File;
use OCP\IImage;

class OpenDocument extends Bundled {
	/**
	 * {@inheritDoc}
	 */
	public function getMimeType(): string {
		return '/application\/vnd.oasis.opendocument.*/';
	}


	/**
	 * @inheritDoc
	 */
	public function getThumbnail(File $file, int $maxX, int $maxY): ?IImage {
		$image = $this->extractThumbnail($file, 'Thumbnails/thumbnail.png');
		if (($image !== null) && $image->valid()) {
			return $image;
		}
		return null;
	}
}
