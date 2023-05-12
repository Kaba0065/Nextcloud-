/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

const styleRefreshFields = [
	'color',
	'logo',
	'background',
	'logoheader',
	'favicon',
	'disable-user-theming',
]

export default {
	emits: [
		'update:theming',
	],

	data() {
		return {
			showSuccess: false,
			errorMessage: '',
		}
	},

	computed: {
		id() {
			return `admin-theming-${this.name}`
		},
	},

	methods: {
		reset() {
			this.showSuccess = false
			this.errorMessage = ''
		},

		handleSuccess() {
			this.showSuccess = true
			setTimeout(() => { this.showSuccess = false }, 2000)
			if (styleRefreshFields.includes(this.name)) {
				this.$emit('update:theming')
			}
		},
	},
}
