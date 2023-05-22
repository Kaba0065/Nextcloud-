<?php

namespace Test\Files\Mount;

use OC\Files\Mount\ObjectHomeMountProvider;
use OC\Files\ObjectStore\PrimaryObjectStoreConfig;
use OCP\Files\ObjectStore\IObjectStore;
use OCP\Files\Storage\IStorageFactory;
use OCP\IConfig;
use OCP\IUser;
use Psr\Log\LoggerInterface;

class ObjectHomeMountProviderTest extends \Test\TestCase {
	/** @var ObjectHomeMountProvider */
	protected $provider;

	/** @var IConfig|\PHPUnit\Framework\MockObject\MockObject */
	protected $config;

	/** @var IUser|\PHPUnit\Framework\MockObject\MockObject */
	protected $user;

	/** @var IStorageFactory|\PHPUnit\Framework\MockObject\MockObject */
	protected $loader;

	protected function setUp(): void {
		parent::setUp();

		$this->config = $this->createMock(IConfig::class);
		$this->user = $this->createMock(IUser::class);
		$this->loader = $this->createMock(IStorageFactory::class);

		$objectStoreConfig = new PrimaryObjectStoreConfig($this->config, $this->createMock(LoggerInterface::class));
		$this->provider = new ObjectHomeMountProvider($objectStoreConfig);
	}

	public function testSingleBucket() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar'
						],
					];
				} else {
					return $default;
				}
			});

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$arguments = $this->invokePrivate($mount, 'arguments');

		$objectStore = $arguments['objectstore'];
		$this->assertInstanceOf(FakeObjectStore::class, $objectStore);
		$this->assertEquals(['foo' => 'bar'], $objectStore->getArguments());
	}

	public function testMultiBucket() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore_multibucket') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar'
						],
					];
				} else {
					return $default;
				}
			});

		$this->user->method('getUID')
			->willReturn('uid');
		$this->loader->expects($this->never())->method($this->anything());

		$this->config->method('getUserValue')
			->with(
				$this->equalTo('uid'),
				$this->equalTo('homeobjectstore'),
				$this->equalTo('bucket'),
				$this->equalTo(null)
			)->willReturn(null);

		$this->config->expects($this->once())
			->method('setUserValue')
			->with(
				$this->equalTo('uid'),
				$this->equalTo('homeobjectstore'),
				$this->equalTo('bucket'),
				$this->equalTo('49'),
				$this->equalTo(null)
			);

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$arguments = $this->invokePrivate($mount, 'arguments');

		$objectStore = $arguments['objectstore'];
		$this->assertInstanceOf(FakeObjectStore::class, $objectStore);
		$this->assertEquals(['foo' => 'bar', 'bucket' => 49], $objectStore->getArguments());
	}

	public function testMultiBucketWithPrefix() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore_multibucket') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar',
							'bucket' => 'myBucketPrefix',
						],
					];
				} else {
					return $default;
				}
			});

		$this->user->method('getUID')
			->willReturn('uid');
		$this->loader->expects($this->never())->method($this->anything());

		$this->config->expects($this->once())
			->method('getUserValue')
			->with(
				$this->equalTo('uid'),
				$this->equalTo('homeobjectstore'),
				$this->equalTo('bucket'),
				$this->equalTo(null)
			)->willReturn(null);

		$this->config->expects($this->once())
			->method('setUserValue')
			->with(
				$this->equalTo('uid'),
				$this->equalTo('homeobjectstore'),
				$this->equalTo('bucket'),
				$this->equalTo('myBucketPrefix49'),
				$this->equalTo(null)
			);

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$arguments = $this->invokePrivate($mount, 'arguments');

		$objectStore = $arguments['objectstore'];
		$this->assertInstanceOf(FakeObjectStore::class, $objectStore);
		$this->assertEquals(['foo' => 'bar', 'bucket' => 'myBucketPrefix49'], $objectStore->getArguments());
	}

	public function testMultiBucketBucketAlreadySet() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore_multibucket') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar',
							'bucket' => 'myBucketPrefix',
						],
					];
				} else {
					return $default;
				}
			});

		$this->user->method('getUID')
			->willReturn('uid');
		$this->loader->expects($this->never())->method($this->anything());

		$this->config->expects($this->once())
			->method('getUserValue')
			->with(
				$this->equalTo('uid'),
				$this->equalTo('homeobjectstore'),
				$this->equalTo('bucket'),
				$this->equalTo(null)
			)->willReturn('awesomeBucket1');

		$this->config->expects($this->never())
			->method('setUserValue');

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$arguments = $this->invokePrivate($mount, 'arguments');

		$objectStore = $arguments['objectstore'];
		$this->assertInstanceOf(FakeObjectStore::class, $objectStore);
		$this->assertEquals(['foo' => 'bar', 'bucket' => 'awesomeBucket1'], $objectStore->getArguments());
	}

	public function testMultiBucketConfigFirst() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore_multibucket') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar',
							'bucket' => 'myBucketPrefix',
						],
					];
				} else {
					return $default;
				}
			});

		$this->user->method('getUID')
			->willReturn('uid');
		$this->loader->expects($this->never())->method($this->anything());

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$this->assertInstanceOf('OC\Files\Mount\MountPoint', $mount);
	}

	public function testMultiBucketConfigFirstFallBackSingle() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				if ($key === 'objectstore') {
					return [
						'class' => 'Test\Files\Mount\FakeObjectStore',
						'arguments' => [
							'foo' => 'bar',
							'bucket' => 'myBucketPrefix',
						],
					];
				} else {
					return $default;
				}
			});

		$this->user->method('getUID')
			->willReturn('uid');
		$this->loader->expects($this->never())->method($this->anything());

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$this->assertInstanceOf('OC\Files\Mount\MountPoint', $mount);
	}

	public function testNoObjectStore() {
		$this->config->method('getSystemValue')
			->willReturnCallback(function($key, $default) {
				return $default;
			});

		$mount = $this->provider->getHomeMountForUser($this->user, $this->loader);
		$this->assertNull($mount);
	}
}

class FakeObjectStore implements IObjectStore {
	private $arguments;

	public function __construct(array $arguments) {
		$this->arguments = $arguments;
	}

	public function getArguments() {
		return $this->arguments;
	}

	public function getStorageId() {
	}

	public function readObject($urn) {
	}

	public function writeObject($urn, $stream, string $mimetype = null) {
	}

	public function deleteObject($urn) {
	}

	public function objectExists($urn) {
	}

	public function copyObject($from, $to) {
	}
}
