<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Bjoern Schiessle <bjoern@schiessle.org>
 * @author Björn Schießle <bjoern@schiessle.org>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Robin Appelman <robin@icewind.nl>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
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
namespace OCA\FederatedFileSharing\Controller;

use OCA\FederatedFileSharing\AddressHandler;
use OCA\FederatedFileSharing\FederatedShareProvider;
use OCA\FederatedFileSharing\Notifications;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\App\IAppManager;
use OCP\Constants;
use OCP\DB\Exception;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Federation\Exceptions\ProviderCouldNotAddShareException;
use OCP\Federation\Exceptions\ProviderDoesNotExistsException;
use OCP\Federation\ICloudFederationFactory;
use OCP\Federation\ICloudFederationProviderManager;
use OCP\Federation\ICloudIdManager;
use OCP\IDBConnection;
use OCP\IRequest;
use OCP\IUserManager;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use OCP\Share;
use OCP\Share\Exceptions\ShareNotFound;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Log\LoggerInterface;

class RequestHandlerController extends OCSController {

	/** @var string */
	private string $shareTable = 'share';

	public function __construct(
		string $appName,
		IRequest $request,
		private FederatedShareProvider $federatedShareProvider,
		private IDBConnection $connection,
		private Share\IManager $shareManager,
		private Notifications $notifications,
		private AddressHandler $addressHandler,
		private IUserManager $userManager,
		private ICloudIdManager $cloudIdManager,
		private LoggerInterface $logger,
		private ICloudFederationFactory $cloudFederationFactory,
		private ICloudFederationProviderManager $cloudFederationProviderManager,
		private IEventDispatcher $eventDispatcher,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * create a new share
	 *
	 * @param string|null $remote
	 * @param string|null $token
	 * @param string|null $name
	 * @param string|null $owner
	 * @param string|null $sharedBy
	 * @param string|null $shareWith
	 * @param int|null $remoteId
	 * @param string|null $sharedByFederatedId
	 * @param string|null $ownerFederatedId
	 * @return Http\DataResponse
	 * @throws OCSException
	 */
	public function createShare(
		?string $remote = null,
		?string $token = null,
		?string $name = null,
		?string $owner = null,
		?string $sharedBy = null,
		?string $shareWith = null,
		?int $remoteId = null,
		?string $sharedByFederatedId = null,
		?string $ownerFederatedId = null,
	): Http\DataResponse {
		if ($ownerFederatedId === null) {
			$ownerFederatedId = $this->cloudIdManager->getCloudId($owner, $this->cleanupRemote($remote))->getId();
		}
		// if the owner of the share and the initiator are the same user
		// we also complete the federated share ID for the initiator
		if ($sharedByFederatedId === null && $owner === $sharedBy) {
			$sharedByFederatedId = $ownerFederatedId;
		}

		$share = $this->cloudFederationFactory->getCloudFederationShare(
			$shareWith,
			$name,
			'',
			$remoteId,
			$ownerFederatedId,
			$owner,
			$sharedByFederatedId,
			$sharedBy,
			$token,
			'user',
			'file'
		);

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$provider->shareReceived($share);
			if ($sharedByFederatedId === $ownerFederatedId) {
					$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('A new federated share with "%s" was created by "%s" and shared with "%s"', [$name, $ownerFederatedId, $shareWith]));
			} else {
					$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('A new federated share with "%s" was shared by "%s" (resource owner is: "%s") and shared with "%s"', [$name, $sharedByFederatedId, $ownerFederatedId, $shareWith]));
			}
		} catch (ProviderDoesNotExistsException $e) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		} catch (ProviderCouldNotAddShareException $e) {
			throw new OCSException($e->getMessage(), 400);
		} catch (\Exception $e) {
			throw new OCSException('internal server error, was not able to add share from ' . $remote, 500);
		}

		return new Http\DataResponse();
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * create re-share on behalf of another user
	 *
	 * @param int $id
	 * @param string|null $token
	 * @param string|null $shareWith
	 * @param int|null $permission
	 * @param int|null $remoteId
	 * @return Http\DataResponse
	 * @throws OCSBadRequestException
	 * @throws OCSException
	 */
	public function reShare(int $id, ?string $token = null, ?string $shareWith = null, ?int $permission = 0, ?int $remoteId = 0): Http\DataResponse {
		if ($token === null ||
			$shareWith === null ||
			$permission === null ||
			$remoteId === null
		) {
			throw new OCSBadRequestException();
		}

		$notification = [
			'sharedSecret' => $token,
			'shareWith' => $shareWith,
			'senderId' => $remoteId,
			'message' => 'Recipient of a share ask the owner to reshare the file'
		];

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			[$newToken, $localId] = $provider->notificationReceived('REQUEST_RESHARE', $id, $notification);
			return new Http\DataResponse([
				'token' => $newToken,
				'remoteId' => $localId
			]);
		} catch (ProviderDoesNotExistsException $e) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		} catch (ShareNotFound $e) {
			$this->logger->debug('Share not found: ' . $e->getMessage(), ['exception' => $e]);
		} catch (\Exception $e) {
			$this->logger->debug('internal server error, can not process notification: ' . $e->getMessage(), ['exception' => $e]);
		}

		throw new OCSBadRequestException();
	}


	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * accept server-to-server share
	 *
	 * @param int $id
	 * @param string|null $token
	 * @return DataResponse
	 * @throws OCSException
	 */
	public function acceptShare(int $id, ?string $token = null): DataResponse {
		$notification = [
			'sharedSecret' => $token,
			'message' => 'Recipient accept the share'
		];

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$provider->notificationReceived('SHARE_ACCEPTED', $id, $notification);
			$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('Federated share with id "%s" was accepted', [$id]));
		} catch (ProviderDoesNotExistsException $e) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		} catch (ShareNotFound $e) {
			$this->logger->debug('Share not found: ' . $e->getMessage(), ['exception' => $e]);
		} catch (\Exception $e) {
			$this->logger->debug('internal server error, can not process notification: ' . $e->getMessage(), ['exception' => $e]);
		}

		return new Http\DataResponse();
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * decline server-to-server share
	 *
	 * @param int $id
	 * @param string|null $token
	 * @return Http\DataResponse
	 * @throws OCSException
	 */
	public function declineShare(int $id, ?string $token = null): DataResponse {
		$notification = [
			'sharedSecret' => $token,
			'message' => 'Recipient declined the share'
		];

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$provider->notificationReceived('SHARE_DECLINED', $id, $notification);
			$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('Federated share with id "%s" was declined', [$id]));
		} catch (ProviderDoesNotExistsException $e) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		} catch (ShareNotFound $e) {
			$this->logger->debug('Share not found: ' . $e->getMessage(), ['exception' => $e]);
		} catch (\Exception $e) {
			$this->logger->debug('internal server error, can not process notification: ' . $e->getMessage(), ['exception' => $e]);
		}

		return new Http\DataResponse();
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * remove server-to-server share if it was unshared by the owner
	 *
	 * @param int $id
	 * @param string|null $token
	 * @return Http\DataResponse
	 * @throws OCSException
	 */
	public function unshare(int $id, ?string $token = null): DataResponse {
		if (!$this->isS2SEnabled()) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		}

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$notification = ['sharedSecret' => $token];
			$provider->notificationReceived('SHARE_UNSHARED', $id, $notification);
			$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('Federated share with id "%s" was unshared', [$id]));
		} catch (\Exception $e) {
			$this->logger->debug('processing unshare notification failed: ' . $e->getMessage(), ['exception' => $e]);
		}

		return new Http\DataResponse();
	}

	private function cleanupRemote($remote): string {
		$remote = substr($remote, strpos($remote, '://') + 3);

		return rtrim($remote, '/');
	}


	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * federated share was revoked, either by the owner or the re-sharer
	 *
	 * @param int $id
	 * @param string|null $token
	 * @return Http\DataResponse
	 * @throws OCSBadRequestException
	 */
	public function revoke(int $id, ?string $token = null): DataResponse {
		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$notification = ['sharedSecret' => $token];
			$provider->notificationReceived('RESHARE_UNDO', $id, $notification);
			return new Http\DataResponse();
		} catch (\Exception $e) {
			throw new OCSBadRequestException();
		}
	}

	/**
	 * check if server-to-server sharing is enabled
	 *
	 * @param bool $incoming
	 * @return bool
	 * @throws ContainerExceptionInterface
	 * @throws NotFoundExceptionInterface
	 */
	private function isS2SEnabled(bool $incoming = false): bool {
		$result = \OCP\Server::get(IAppManager::class)->isEnabledForUser('files_sharing');

		if ($incoming) {
			$result = $result && $this->federatedShareProvider->isIncomingServer2serverShareEnabled();
		} else {
			$result = $result && $this->federatedShareProvider->isOutgoingServer2serverShareEnabled();
		}

		return $result;
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * update share information to keep federated re-shares in sync
	 *
	 * @param int $id
	 * @param string|null $token
	 * @param int|null $permissions
	 * @return Http\DataResponse
	 * @throws OCSBadRequestException
	 */
	public function updatePermissions(int $id, ?string $token = null, ?int $permissions = null): DataResponse {
		$ncPermissions = $permissions;

		try {
			$provider = $this->cloudFederationProviderManager->getCloudFederationProvider('file');
			$ocmPermissions = $this->ncPermissions2ocmPermissions((int)$ncPermissions);
			$notification = ['sharedSecret' => $token, 'permission' => $ocmPermissions];
			$provider->notificationReceived('RESHARE_CHANGE_PERMISSION', $id, $notification);
			$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent('Federated share with id "%s" has updated permissions "%s"', [$id, implode(', ', $ocmPermissions)]));
		} catch (\Exception $e) {
			$this->logger->debug($e->getMessage(), ['exception' => $e]);
			throw new OCSBadRequestException();
		}

		return new Http\DataResponse();
	}

	/**
	 * translate Nextcloud permissions to OCM Permissions
	 *
	 * @param $ncPermissions
	 * @return array
	 */
	protected function ncPermissions2ocmPermissions($ncPermissions): array {
		$ocmPermissions = [];

		if ($ncPermissions & Constants::PERMISSION_SHARE) {
			$ocmPermissions[] = 'share';
		}

		if ($ncPermissions & Constants::PERMISSION_READ) {
			$ocmPermissions[] = 'read';
		}

		if (($ncPermissions & Constants::PERMISSION_CREATE) ||
			($ncPermissions & Constants::PERMISSION_UPDATE)) {
			$ocmPermissions[] = 'write';
		}

		return $ocmPermissions;
	}

	/**
	 * @NoCSRFRequired
	 * @PublicPage
	 *
	 * change the owner of a server-to-server share
	 *
	 * @param int $id
	 * @param string|null $token
	 * @param string|null $remote
	 * @param string|null $remote_id
	 * @return DataResponse
	 * @throws ContainerExceptionInterface
	 * @throws NotFoundExceptionInterface
	 * @throws OCSBadRequestException
	 * @throws OCSException
	 * @throws Exception
	 */
	public function move(int $id, ?string $token = null, ?string $remote = null, ?string $remote_id = null): DataResponse {
		if (!$this->isS2SEnabled()) {
			throw new OCSException('Server does not support federated cloud sharing', 503);
		}

		$newRemoteId = (string) ($remote_id ?? $id);
		$cloudId = $this->cloudIdManager->resolveCloudId($remote);

		$qb = $this->connection->getQueryBuilder();
		$query = $qb->update('share_external')
			->set('remote', $qb->createNamedParameter($cloudId->getRemote()))
			->set('owner', $qb->createNamedParameter($cloudId->getUser()))
			->set('remote_id', $qb->createNamedParameter($newRemoteId))
			->where($qb->expr()->eq('remote_id', $qb->createNamedParameter($id)))
			->andWhere($qb->expr()->eq('share_token', $qb->createNamedParameter($token)));
		$affected = $query->executeStatement();

		if ($affected > 0) {
			return new Http\DataResponse(['remote' => $cloudId->getRemote(), 'owner' => $cloudId->getUser()]);
		} else {
			throw new OCSBadRequestException('Share not found or token invalid');
		}
	}
}
