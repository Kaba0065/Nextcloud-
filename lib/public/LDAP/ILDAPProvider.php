<?php
/**
 * @author Roger Szabo <roger.szabo@web.de>
 *
 * @copyright Copyright (c) 2016, ownCloud, Inc.
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

namespace OCP\LDAP;

/**
 * Interface ILDAPProvider
 *
 * @package OCP\LDAP
 * @since 9.2.0
 */
interface ILDAPProvider {
	/**
	 * Translate an ownCloud username to LDAP DN.
	 * @param string $uid ownCloud user id
	 * @return string
	 * @since 9.2.0
	 */
	public function getUserDN($uid);
	
	/**
	 * Translate a LDAP DN to an ownCloud user name.
	 * @param string $dn LDAP DN
	 * @return string with the ownCloud user name
	 * @throws \Exception if translation was unsuccessful
	 * @since 9.2.0
	 */
	public function getUserName($dn);
	
	/**
	 * Convert a stored DN so it can be used as base parameter for LDAP queries.
	 * @param string $dn the DN
	 * @return string
	 * @since 9.2.0
	 */
	public function DNasBaseParameter($dn);
	
	/**
	 * Sanitize a DN received from the LDAP server.
	 * @param array $dn the DN in question
	 * @return array the sanitized DN
	 * @since 9.2.0
	 */
	public function sanitizeDN($dn);
	
	/**
	 * Return a new LDAP connection resource for the specified user. 
	 * @param string $uid ownCloud user id
	 * @return resource of the LDAP connection
	 * @since 9.2.0
	 */
	public function getLDAPConnection($uid);
	
	/**
	 * Get the LDAP base for users.
	 * @param string $uid ownCloud user id
	 * @return string the base for users
	 * @throws \Exception if user id was not found in LDAP
	 * @since 9.2.0
	 */
	public function getLDAPBaseUsers($uid);
	
	/**
	 * Get the LDAP base for groups.
	 * @param string $uid ownCloud user id
	 * @return string the base for groups
	 * @throws \Exception if user id was not found in LDAP
	 * @since 9.2.0
	 */
	public function getLDAPBaseGroups($uid);
	
	/**
	 * Check whether a LDAP DN exists
	 * @param string $dn LDAP DN
	 * @return bool whether the DN exists
	 * @since 9.2.0
	 */
	public function dnExists($dn);
	
	/**
	 * Clear the cache if a cache is used, otherwise do nothing.
	 * @param string $uid ownCloud user id
	 * @since 9.2.0
	 */
	public function clearCache($uid);
}
