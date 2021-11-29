/**
 * @copyright Copyright (c) 2020 Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Jan C. Borchardt <hey@jancborchardt.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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

import { loadState } from '@nextcloud/initial-state'

OCA.Accessibility = loadState('accessibility', 'data')
// Force a specific theme for guests based on force-color-scheme param
const srvUrl = new URL(window.location.href)
const forceColorScheme = srvUrl.searchParams.get('force-color-scheme')
if (forceColorScheme !== null && (forceColorScheme === 'dark' || forceColorScheme === 'light')) {
	OCA.Accessibility.theme = forceColorScheme
} else if (OCA.Accessibility.checkMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// Overwrite the theme for guests based on the prefers-color-scheme
	OCA.Accessibility.theme = 'dark'
}

if (OCA.Accessibility.theme !== false) {
	document.body.classList.add(`theme--${OCA.Accessibility.theme}`)
} else {
	document.body.classList.add('theme--light')
}

if (OCA.Accessibility.highcontrast !== false) {
	document.body.classList.add('theme--highcontrast')
}
