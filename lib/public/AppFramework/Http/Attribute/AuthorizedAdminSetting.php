<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Joas Schilling <coding@schilljs.com>
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
namespace OCP\AppFramework\Http\Attribute;

use Attribute;
use OCP\Settings\IDelegatedSettings;

/**
 * Attribute for controller methods that should be only accessible with
 * full admin or partial admin permissions.
 *
 * @since 27.0.0
 */
#[Attribute(Attribute::TARGET_METHOD | Attribute::IS_REPEATABLE)]
class AuthorizedAdminSetting {
	/**
	 * @param class-string<IDelegatedSettings> $settings A settings section the user needs to be able to access
	 * @since 27.0.0
	 */
	public function __construct(
		protected string $settings
	) {
	}

	/**
	 *
	 * @return class-string<IDelegatedSettings>
	 * @since 27.0.0
	 */
	public function getSettings(): string {
		return $this->settings;
	}
}
