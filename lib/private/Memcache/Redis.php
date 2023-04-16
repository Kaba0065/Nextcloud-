<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Jörn Friedrich Dreyer <jfd@butonic.de>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Robin Appelman <robin@icewind.nl>
 * @author Robin McCorkell <robin@mccorkell.me.uk>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Stefan Weil <sw@weilnetz.de>
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
namespace OC\Memcache;

use OCP\IMemcacheTTL;

/** name => [script, sha1] */
const LUA_SCRIPTS = [
	'dec' => [
		'if redis.call("exists", KEYS[1]) == 1 then return redis.call("decrby", KEYS[1], ARGV[1]) else return "NEX" end',
		'720b40cb66cef1579f2ef16ec69b3da8c85510e9',
	],
	'cas' => [
		'if redis.call("get", KEYS[1]) == ARGV[1] then redis.call("set", KEYS[1], ARGV[2]) return 1 else return 0 end',
		'94eac401502554c02b811e3199baddde62d976d4',
	],
	'cad' => [
		'if redis.call("get", KEYS[1]) == ARGV[1] then return redis.call("del", KEYS[1]) else return 0 end',
		'cf0e94b2e9ffc7e04395cf88f7583fc309985910',
	],
];

class Redis extends Cache implements IMemcacheTTL {
	/**
	 * @var \Redis $cache
	 */
	private static $cache = null;

	public function __construct($prefix = '', string $logFile = '') {
		parent::__construct($prefix);
		if (is_null(self::$cache)) {
			self::$cache = \OC::$server->getGetRedisFactory()->getInstance();
		}
	}

	public function get($key) {
		$result = self::$cache->get($this->getPrefix() . $key);
		if ($result === false && !self::$cache->exists($this->getPrefix() . $key)) {
			return null;
		}

		return self::decodeValue($result);
	}

	public function set($key, $value, $ttl = 0) {
		$value = self::encodeValue($value);
		if ($ttl > 0) {
			return self::$cache->setex($this->getPrefix() . $key, $ttl, json_encode($value));
		} else {
			return self::$cache->set($this->getPrefix() . $key, json_encode($value));
		}
	}

	public function hasKey($key) {
		return (bool)self::$cache->exists($this->getPrefix() . $key);
	}

	public function remove($key) {
		if (self::$cache->del($this->getPrefix() . $key)) {
			return true;
		} else {
			return false;
		}
	}

	public function clear($prefix = '') {
		// TODO: this is slow and would fail with Redis cluster
		$prefix = $this->getPrefix() . $prefix . '*';
		$keys = self::$cache->keys($prefix);
		$deleted = self::$cache->del($keys);

		return (is_array($keys) && (count($keys) === $deleted));
	}

	/**
	 * Set a value in the cache if it's not already stored
	 *
	 * @param string $key
	 * @param mixed $value
	 * @param int $ttl Time To Live in seconds. Defaults to 60*60*24
	 * @return bool
	 */
	public function add($key, $value, $ttl = 0) {
		$value = self::encodeValue($value);

		$args = ['nx'];
		if ($ttl !== 0 && is_int($ttl)) {
			$args['ex'] = $ttl;
		}

		return self::$cache->set($this->getPrefix() . $key, $value, $args);
	}

	/**
	 * Increase a stored number
	 *
	 * @param string $key
	 * @param int $step
	 * @return int | bool
	 */
	public function inc($key, $step = 1) {
		return self::$cache->incrBy($this->getPrefix() . $key, $step);
	}

	/**
	 * Decrease a stored number
	 *
	 * @param string $key
	 * @param int $step
	 * @return int | bool
	 */
	public function dec($key, $step = 1) {
		if (!$this->hasKey($key)) {
			return false;
		}
		return self::$cache->decrBy($this->getPrefix() . $key, $step);
	}

	/**
	 * Compare and set
	 *
	 * @param string $key
	 * @param mixed $old
	 * @param mixed $new
	 * @return bool
	 */
	public function cas($key, $old, $new) {
		if (!is_int($new)) {
			$new = json_encode($new);
		}
		self::$cache->watch($this->getPrefix() . $key);
		if ($this->get($key) === $old) {
			$result = self::$cache->multi()
				->set($this->getPrefix() . $key, $new)
				->exec();
			return $result !== false;
		}
		self::$cache->unwatch();
		return false;
	}

	/**
	 * Compare and delete
	 *
	 * @param string $key
	 * @param mixed $old
	 * @return bool
	 */
	public function cad($key, $old) {
		self::$cache->watch($this->getPrefix() . $key);
		if ($this->get($key) === $old) {
			$result = self::$cache->multi()
				->del($this->getPrefix() . $key)
				->exec();
			return $result !== false;
		}
		self::$cache->unwatch();
		return false;
	}

	public function setTTL($key, $ttl) {
		self::$cache->expire($this->getPrefix() . $key, $ttl);
	}

	public static function isAvailable(): bool {
		return \OC::$server->getGetRedisFactory()->isAvailable();
	}

	protected function evalLua($scriptName, $keys, $args) {
		$keys = array_map(fn ($key) => $this->getPrefix() . $key, $keys);
		$args = array_merge($keys, $args);
		$script = LUA_SCRIPTS[$scriptName];

		$result = $this->getCache()->evalSha($script[1], $args, count($keys));
		if (false === $result) {
			$result = $this->getCache()->eval($script[0], $args, count($keys));
		}

		return $result;
	}

	protected static function encodeValue($value) {
		return is_int($value) ? (string) $value : json_encode($value);
	}

	protected static function decodeValue($value) {
		return is_numeric($value) ? (int) $value : json_decode($value, true);
	}
}
