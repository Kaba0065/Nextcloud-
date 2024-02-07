/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @license AGPL-3.0-or-later
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

/* eslint-disable @nextcloud/no-deprecations */
import { initCore } from './init.js'

import _ from 'underscore'
import { dav } from 'davclient.js'

import OC from './OC/index.js'
import OCP from './OCP/index.js'
import OCA from './OCA/index.js'
import { getToken as getRequestToken } from './OC/requesttoken.js'
import { setDeprecatedProp } from './utils/deprecate.js'
import { translate, translatePlural } from '@nextcloud/l10n'

setDeprecatedProp('_', () => _, 'please ship your own, this will be removed in Nextcloud 30')
setDeprecatedProp('dav', () => dav, 'Migrate to use the webdav client from `@nextcloud/files`, this will be removed in Nextcloud 30')

window.OC = OC
setDeprecatedProp('initCore', () => initCore, 'this is an internal function')
setDeprecatedProp('oc_appswebroots', () => OC.appswebroots, 'use OC.appswebroots instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_config', () => OC.config, 'use OC.config instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_current_user', () => OC.getCurrentUser().uid, 'use OC.getCurrentUser().uid instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_debug', () => OC.debug, 'use OC.debug instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_defaults', () => OC.theme, 'use OC.theme instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_isadmin', OC.isUserAdmin, 'use OC.isUserAdmin() instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_requesttoken', () => getRequestToken(), 'use OC.requestToken instead, this will be removed in Nextcloud 20')
setDeprecatedProp('oc_webroot', () => OC.webroot, 'use OC.getRootPath() instead, this will be removed in Nextcloud 20')
setDeprecatedProp('OCDialogs', () => OC.dialogs, 'use OC.dialogs instead, this will be removed in Nextcloud 20')
window.OCP = OCP
window.OCA = OCA

/**
 * translate a string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} text the string to translate
 * @param [vars] map of placeholder key to value
 * @param {number} [count] number to replace %n with
 * @return {string}
 */
window.t = translate

/**
 * translate a string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} text_singular the string to translate for exactly one object
 * @param {string} text_plural the string to translate for n objects
 * @param {number} count number to determine whether to use singular or plural
 * @param [vars] map of placeholder key to value
 * @return {string} Translated string
 */
window.n = translatePlural
