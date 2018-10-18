const chai = require('chai')
const assert = require('chai').assert;
const expect = require('chai').expect;
const Grid = require('../grid.js');
const Rover = require('../rover.js');

describe('Grid Class', function() {
  let testGrid1 = new Grid(1, 2);
  let testGrid2 = new Grid(6, 3);
  it('should define a grid', function() {
    assert.exists(Grid)
  })

  it('should create a new Grid instance with x and y coordinates', function() {
    assert.equal(testGrid1.x, 1)
    assert.equal(testGrid1.y, 2)
    assert.equal(testGrid2.x, 6)
    assert.equal(testGrid2.y, 3)
  })

  it('should create a new Grid instance with empty array when no rovers are added', function() {
    assert.isArray(testGrid1.rovers)
    assert.deepEqual(testGrid1.rovers, [])
  })
})

describe('placeRover', function() {
  let testGrid3 = new Grid(5, 5);
  let testRover1 = new Rover(1, 3, 'N')
  let testRover2 = new Rover(6, 6, 'E')
  let testRover3 = new Rover(-3, -2, 'E')

  it('should push new rovers into rovers array when within boundaries', function() {
    testGrid3.placeRover(testRover1)
    assert.equal(testGrid3.rovers[0], testRover1)
  })

  it('should not push new rovers into rovers array when out of boundaries (max)', function() {
    testGrid3.placeRover(testRover2)
    assert.notExists(testGrid3.rovers[1])
  })

  it('should not push new rovers into rovers array when out of boundaries (min)', function() {
    testGrid3.placeRover(testRover3)
    assert.notExists(testGrid3.rovers[1])
  })

  it('should not push new rovers into rovers array when there is already a rover occupying the same space', function () {
    testGrid3.placeRover(testRover1)
    assert.notExists(testGrid3.rovers[1])
  })

})