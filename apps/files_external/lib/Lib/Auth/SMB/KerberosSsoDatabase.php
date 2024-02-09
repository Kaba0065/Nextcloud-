<?php

/**
 * @copyright Copyright (c) 2018 Robin Appelman <robin@icewind.nl>
 *
 * @author Robin Appelman <robin@icewind.nl>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_External\Lib\Auth\SMB;

use Icewind\SMB\KerberosTicket;
use OCA\Files_External\Lib\Auth\AuthMechanism;
use OCA\Files_External\Lib\DefinitionParameter;
use OCA\Files_External\Lib\InsufficientDataForMeaningfulAnswerException;
use OCP\IL10N;
use OCP\ISession;
use OCP\IUser;
use OCP\Security\ICredentialsManager;

class KerberosSsoDatabase extends AuthMechanism {
	private ICredentialsManager $credentialsManager;

	public function __construct(IL10N $l, ICredentialsManager $credentialsManager) {
		$realm = new DefinitionParameter('default_realm', 'Default realm');
		$realm
			->setType(DefinitionParameter::VALUE_TEXT)
			->setFlag(DefinitionParameter::FLAG_OPTIONAL)
			->setTooltip($l->t('Kerberos default realm, defaults to "WORKGROUP"'));
		$this
			->setIdentifier('smb::kerberos_sso_database')
			->setScheme(self::SCHEME_SMB)
			->setText($l->t('Kerberos ticket SSO, save in database'))
			->addParameter($realm);
		$this->credentialsManager = $credentialsManager;
	}

	public function getTicket(?IUser $user): KerberosTicket {
		if (!isset($user)) {
			throw new InsufficientDataForMeaningfulAnswerException('No kerberos ticket saved');
		}
		try {
			$envTicket = KerberosTicket::fromEnv();
		} catch (\Exception $e) {
			$envTicket = null;
		}
		if ($envTicket) {
			$this->credentialsManager->store($user->getUID(), 'kerberos_ticket', base64_encode($envTicket->save()));
			return $envTicket;
		}

		$savedTicket = $this->credentialsManager->retrieve($user->getUID(), 'kerberos_ticket');
		if (!$savedTicket) {
			throw new InsufficientDataForMeaningfulAnswerException('No kerberos ticket saved');
		}
		return KerberosTicket::load(base64_decode($savedTicket));
	}
}
