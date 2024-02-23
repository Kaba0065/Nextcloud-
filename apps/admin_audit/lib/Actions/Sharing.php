<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2016 Lukas Reschke <lukas@statuscode.ch>
 *
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Lukas Reschke <lukas@statuscode.ch>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Sascha Wiswedel <sascha.wiswedel@nextcloud.com>
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
namespace OCA\AdminAudit\Actions;

use OCP\Share\IShare;

/**
 * Class Sharing logs the sharing actions
 *
 * @package OCA\AdminAudit\Actions
 */
class Sharing extends Action {
	/**
	 * Logs sharing of data
	 *
	 * @param array $params
	 */
	public function shared(array $params): void {
		match ($params['shareType']) {
			IShare::TYPE_LINK => $this->sharedLinkType($params),
			IShare::TYPE_USER => $this->sharedUserType($params),
			IShare::TYPE_GROUP => $this->sharedGroupType($params),
			IShare::TYPE_ROOM => $this->sharedRoomType($params),
			IShare::TYPE_EMAIL => $this->sharedEmailType($params),
			IShare::TYPE_CIRCLE => $this->sharedCircleType($params),
			IShare::TYPE_REMOTE => $this->sharedRemoteType($params),
			IShare::TYPE_REMOTE_GROUP => $this->sharedRemoteGroupType($params),
			IShare::TYPE_DECK => $this->sharedDeckType($params),
			IShare::TYPE_SCIENCEMESH => $this->sharedSciencemeshType($params),
			default => null,
		};
	}

	protected function sharedLinkType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared via link with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedUserType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the user "%s" with permissions "%s"  (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedGroupType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the group "%s" with permissions "%s"  (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedRoomType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the room "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedEmailType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the email recipient "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedCircleType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the circle "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedRemoteType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the remote user "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedRemoteGroupType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the remote group "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedDeckType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the deck card "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	protected function sharedSciencemeshType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been shared to the ScienceMesh user "%s" with permissions "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'shareWith',
				'permissions',
				'id',
			]
		);
	}

	/**
	 * Logs unsharing of data
	 *
	 * @param array $params
	 */
	public function unshare(array $params): void {
		match ($params['shareType']) {
			IShare::TYPE_LINK => $this->unshareLinkType($params),
			IShare::TYPE_USER => $this->unshareUserType($params),
			IShare::TYPE_GROUP => $this->unshareGroupType($params),
			IShare::TYPE_ROOM => $this->unshareRoomType($params),
			IShare::TYPE_EMAIL => $this->unshareEmailType($params),
			IShare::TYPE_CIRCLE => $this->unshareCircleType($params),
			IShare::TYPE_REMOTE => $this->unshareRemoteType($params),
			IShare::TYPE_REMOTE_GROUP => $this->unshareRemoteGroupType($params),
			IShare::TYPE_DECK => $this->unshareDeckType($params),
			IShare::TYPE_SCIENCEMESH => $this->unshareSciencemeshType($params),
			default => null,
		};
	}

	protected function unshareLinkType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'id',
			]
		);
	}

	protected function unshareUserType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the user "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareGroupType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the group "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareRoomType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the room "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareEmailType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the email recipient "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareCircleType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the circle "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareRemoteType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the remote user "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareRemoteGroupType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the remote group "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareDeckType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the deck card "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	protected function unshareSciencemeshType(array $params): void {
		$this->log(
			'The %s "%s" with ID "%s" has been unshare from the ScienceMesh user "%s" (Share ID: %s)',
			$params,
			[
				'itemType',
				'fileTarget',
				'itemSource',
				'shareWith',
				'id',
			]
		);
	}

	/**
	 * Logs the updating of permission changes for shares
	 *
	 * @param array $params
	 */
	public function updatePermissions(array $params): void {
		$this->log(
			'The permissions of the shared %s "%s" with ID "%s" have been changed to "%s"',
			$params,
			[
				'itemType',
				'path',
				'itemSource',
				'permissions',
			]
		);
	}

	/**
	 * Logs the password changes for a share
	 *
	 * @param array $params
	 */
	public function updatePassword(array $params): void {
		$this->log(
			'The password of the publicly shared %s "%s" with ID "%s" has been changed',
			$params,
			[
				'itemType',
				'token',
				'itemSource',
			]
		);
	}

	/**
	 * Logs the expiration date changes for a share
	 *
	 * @param array $params
	 */
	public function updateExpirationDate(array $params): void {
		if ($params['date'] === null) {
			$this->log(
				'The expiration date of the publicly shared %s with ID "%s" has been removed',
				$params,
				[
					'itemType',
					'itemSource',
				]
			);
		} else {
			$this->log(
				'The expiration date of the publicly shared %s with ID "%s" has been changed to "%s"',
				$params,
				[
					'itemType',
					'itemSource',
					'date',
				]
			);
		}
	}

	/**
	 * Logs access of shared files
	 *
	 * @param array $params
	 */
	public function shareAccessed(array $params): void {
		$this->log(
			'The shared %s with the token "%s" by "%s" has been accessed.',
			$params,
			[
				'itemType',
				'token',
				'uidOwner',
			]
		);
	}
}
