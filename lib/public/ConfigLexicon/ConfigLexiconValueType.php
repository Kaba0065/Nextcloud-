<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2024 Maxence Lange <maxence@artificial-owl.com>
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 *
 * @license AGPL-3.0 or later
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

namespace OCP\ConfigLexicon;

/**
 * Listing of available value type for config lexicon
 *
 * @see IConfigLexicon
 * @since 30.0.0
 */
enum ConfigLexiconValueType: string {
	/** @since 30.0.0 */
	case STRING = 'string';
	/** @since 30.0.0 */
	case INT = 'int';
	/** @since 30.0.0 */
	case FLOAT = 'float';
	/** @since 30.0.0 */
	case BOOL = 'bool';
	/** @since 30.0.0 */
	case ARRAY = 'array';
}
