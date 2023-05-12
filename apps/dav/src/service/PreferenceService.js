/**
 * @copyright 2022 Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
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

import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'
export async function enableUserStatusAutomation() {
	return await axios.post(
		generateOcsUrl('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
			appId: 'dav',
			configKey: 'user_status_automation',
		}),
		{
			configValue: 'yes',
		}
	)
}

/**
 * Disable user status automation based on availability
 */
export async function disableUserStatusAutomation() {
	return await axios.delete(
		generateOcsUrl('/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
			appId: 'dav',
			configKey: 'user_status_automation',
		})
	)
}
