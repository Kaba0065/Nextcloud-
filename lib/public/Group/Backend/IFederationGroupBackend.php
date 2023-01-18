<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2022 Sandro Mesterheide <sandro.mesterheide@extern.publicplan.de>
 *
 * @author Sandro Mesterheide <sandro.mesterheide@extern.publicplan.de>
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
namespace OCP\Group\Backend;

/**
 * @since 26.0.0
 *
 * Handles federated groups
 */
interface IFederationGroupBackend {
	/**
	 * Whether group is a federated group
	 *
	 * @param string $groupId
	 * @return bool
	 * @since 26.0.0
	 */
	public function isFederatedGroup(string $groupId): bool;
}
