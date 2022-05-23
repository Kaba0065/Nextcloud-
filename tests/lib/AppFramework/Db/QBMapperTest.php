<?php
/**
 * @copyright 2019, Marius David Wieschollek <git.public@mdns.eu>
 *
 * @author Marius David Wieschollek <git.public@mdns.eu>
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace Test\AppFramework\Db;

use OCP\AppFramework\Db\Entity;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IExpressionBuilder;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IDBConnection;

/**
 * @method bool getBoolProp()
 * @method void setBoolProp(bool $boolProp)
 * @method integer getIntProp()
 * @method void setIntProp(integer $intProp)
 * @method string getStringProp()
 * @method void setStringProp(string $stringProp)
 * @method bool getBooleanProp()
 * @method void setBooleanProp(bool $booleanProp)
 * @method integer getIntegerProp()
 * @method void setIntegerProp(integer $integerProp)
 */
class QBTestEntity extends Entity {
	protected $intProp;
	protected $boolProp;
	protected $stringProp;
	protected $integerProp;
	protected $booleanProp;
	protected $jsonProp;

	public function __construct() {
		$this->addType('intProp', 'int');
		$this->addType('boolProp', 'bool');
		$this->addType('stringProp', 'string');
		$this->addType('integerProp', 'integer');
		$this->addType('booleanProp', 'boolean');
		$this->addType('jsonProp', 'json');
	}
}

/**
 * Class QBTestMapper
 *
 * @package Test\AppFramework\Db
 */
class QBTestMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'table');
	}

	public function getParameterTypeForPropertyForTest(Entity $entity, string $property) {
		return parent::getParameterTypeForProperty($entity, $property);
	}
}

/**
 * Class QBMapperTest
 *
 * @package Test\AppFramework\Db
 */
class QBMapperTest extends \Test\TestCase {

	/**
	 * @var \PHPUnit\Framework\MockObject\MockObject|IDBConnection
	 */
	protected $db;

	/**
	 * @var \PHPUnit\Framework\MockObject\MockObject|IQueryBuilder
	 */
	protected $qb;

	/**
	 * @var \PHPUnit\Framework\MockObject\MockObject|IExpressionBuilder
	 */
	protected $expr;

	/**
	 * @var \Test\AppFramework\Db\QBTestMapper
	 */
	protected $mapper;

	/**
	 * @throws \ReflectionException
	 */
	protected function setUp(): void {
		$this->db = $this->getMockBuilder(IDBConnection::class)
			->disableOriginalConstructor()
			->getMock();

		$this->qb = $this->getMockBuilder(IQueryBuilder::class)
			->disableOriginalConstructor()
			->getMock();

		$this->expr = $this->getMockBuilder(IExpressionBuilder::class)
			->disableOriginalConstructor()
			->getMock();


		$this->qb->method('expr')->willReturn($this->expr);
		$this->db->method('getQueryBuilder')->willReturn($this->qb);


		$this->mapper = new QBTestMapper($this->db);
	}


	public function testInsertEntityParameterTypeMapping(): void {
		$entity = new QBTestEntity();
		$entity->setIntProp(123);
		$entity->setBoolProp(true);
		$entity->setStringProp('string');
		$entity->setIntegerProp(456);
		$entity->setBooleanProp(false);

		$intParam = $this->qb->createNamedParameter('int_prop', Types::INTEGER);
		$boolParam = $this->qb->createNamedParameter('bool_prop', Types::BOOLEAN);
		$stringParam = $this->qb->createNamedParameter('string_prop', Types::STRING);
		$integerParam = $this->qb->createNamedParameter('integer_prop', Types::INTEGER);
		$booleanParam = $this->qb->createNamedParameter('boolean_prop', Types::BOOLEAN);

		$this->qb->expects($this->exactly(5))
			->method('createNamedParameter')
			->withConsecutive(
				[$this->equalTo(123), $this->equalTo(Types::INTEGER)],
				[$this->equalTo(true), $this->equalTo(Types::BOOLEAN)],
				[$this->equalTo('string'), $this->equalTo(Types::STRING)],
				[$this->equalTo(456), $this->equalTo(Types::INTEGER)],
				[$this->equalTo(false), $this->equalTo(Types::BOOLEAN)]
			);
		$this->qb->expects($this->exactly(5))
			->method('setValue')
			->withConsecutive(
				[$this->equalTo('int_prop'), $this->equalTo($intParam)],
				[$this->equalTo('bool_prop'), $this->equalTo($boolParam)],
				[$this->equalTo('string_prop'), $this->equalTo($stringParam)],
				[$this->equalTo('integer_prop'), $this->equalTo($integerParam)],
				[$this->equalTo('boolean_prop'), $this->equalTo($booleanParam)]
			);

		$this->mapper->insert($entity);
	}


	public function testUpdateEntityParameterTypeMapping() {
		$entity = new QBTestEntity();
		$entity->setId(789);
		$entity->setIntProp(123);
		$entity->setBoolProp('true');
		$entity->setStringProp('string');
		$entity->setIntegerProp(456);
		$entity->setBooleanProp(false);
		$entity->setJsonProp(['hello' => 'world']);

		$idParam = $this->qb->createNamedParameter('id', Types::INTEGER);
		$intParam = $this->qb->createNamedParameter('int_prop', Types::INTEGER);
		$boolParam = $this->qb->createNamedParameter('bool_prop', Types::BOOLEAN);
		$stringParam = $this->qb->createNamedParameter('string_prop', Types::STRING);
		$integerParam = $this->qb->createNamedParameter('integer_prop', Types::INTEGER);
		$booleanParam = $this->qb->createNamedParameter('boolean_prop', Types::BOOLEAN);
		$jsonParam = $this->qb->createNamedParameter('json_prop', Types::JSON);

		$this->qb->expects($this->exactly(7))
			->method('createNamedParameter')
			->withConsecutive(
				[$this->equalTo(123), $this->equalTo(Types::INTEGER)],
				[$this->equalTo(true), $this->equalTo(Types::BOOLEAN)],
				[$this->equalTo('string'), $this->equalTo(Types::STRING)],
				[$this->equalTo(456), $this->equalTo(Types::INTEGER)],
				[$this->equalTo(false), $this->equalTo(Types::BOOLEAN)],
				[$this->equalTo(['hello' => 'world']), $this->equalTo(Types::JSON)],
				[$this->equalTo(789), $this->equalTo(Types::INTEGER)],
			);

		$this->qb->expects($this->exactly(6))
			->method('set')
			->withConsecutive(
				[$this->equalTo('int_prop'), $this->equalTo($intParam)],
				[$this->equalTo('bool_prop'), $this->equalTo($boolParam)],
				[$this->equalTo('string_prop'), $this->equalTo($stringParam)],
				[$this->equalTo('integer_prop'), $this->equalTo($integerParam)],
				[$this->equalTo('boolean_prop'), $this->equalTo($booleanParam)],
				[$this->equalTo('json_prop'), $this->equalTo($jsonParam)]
			);

		$this->expr->expects($this->once())
			->method('eq')
			->with($this->equalTo('id'), $this->equalTo($idParam));


		$this->mapper->update($entity);
	}


	public function testGetParameterTypeForProperty(): void {
		$entity = new QBTestEntity();

		$intType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'intProp');
		$this->assertEquals(Types::INTEGER, $intType, 'Int type property mapping incorrect');

		$integerType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'integerProp');
		$this->assertEquals(Types::INTEGER, $integerType, 'Integer type property mapping incorrect');

		$boolType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'boolProp');
		$this->assertEquals(Types::BOOLEAN, $boolType, 'Bool type property mapping incorrect');

		$booleanType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'booleanProp');
		$this->assertEquals(Types::BOOLEAN, $booleanType, 'Boolean type property mapping incorrect');

		$stringType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'stringProp');
		$this->assertEquals(Types::STRING, $stringType, 'String type property mapping incorrect');

		$jsonType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'jsonProp');
		$this->assertEquals(Types::JSON, $jsonType, 'JSON type property mapping incorrect');

		$unknownType = $this->mapper->getParameterTypeForPropertyForTest($entity, 'someProp');
		$this->assertEquals(Types::STRING, $unknownType, 'Unknown type property mapping incorrect');
	}
}
