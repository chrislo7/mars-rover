const chai = require('chai')
const fs = require('fs')
const assert = require('chai').assert;
const expect = require('chai').expect;
const assets = require('../functions.js');
const Rover = require('../rover.js');
const Grid = require('../grid.js');



// helper to check for uppercase
chai.Assertion.addProperty('uppercase', function() {
  let obj = this.__flags.object;
  new chai.Assertion(obj).to.be.a('string');

  this.assert(
      obj === obj.toUpperCase() // adapt as needed
    , `expected ${this} to be all uppercase`   // error message when fail for normal
    , `expected ${this} to not be all uppercase`  // error message when fail for negated
  );
})

describe('inputData', function() {
  it ('should take input from text file', function(){
    let result = assets.inputData('input/rover1.txt')
    assert.exists(result)
  })

  it ('should return array for each line within txt file', function(){
    let result = assets.inputData('input/rover1.txt')
    assert.isArray(result)
  })
})

describe('leftTurn', function() {
  it ('should show correct cardinal directions for left turns', function(){
    assert.equal(assets.leftTurn('N'), 'W')
    assert.equal(assets.leftTurn('S'), 'E')
    assert.equal(assets.leftTurn('W'), 'S')
    assert.equal(assets.leftTurn('E'), 'N')
  })
})

describe('rightTurn', function() {
  it ('should show correct cardinal directions for right turns', function(){
    assert.equal(assets.rightTurn('N'), 'E')
    assert.equal(assets.rightTurn('S'), 'W')
    assert.equal(assets.rightTurn('W'), 'N')
    assert.equal(assets.rightTurn('E'), 'S')
  })
})

describe('navigate', function() {
  let result = assets.navigate([1,2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'])

  it ('should return an array with three elements', function(){
    result.map( elements => { assert.exists(elements) })
    assert.notExists(result[3])
  })

  it ('should have numbers for first two elements', function() {
    assert.isFinite(result[0])
    assert.isFinite(result[1])
  })
})




describe('createRovers', function() {
  let testGrid = new Grid(5, 5)
  let testRovers = assets.createRovers([ 'input/rover1.txt', 'input/rover2.txt', 'input/rover3.txt' ])
  it ('should return array with three Rover instances', function() {
    assert.isArray(testRovers)
    testRovers.map(rover => { assert.instanceOf(rover, Rover) })
  })

  it ('should have Rover instances with x, y coordinates and initial headings', function() {
    assert.equal(testRovers[0].x, 1)
    assert.equal(testRovers[0].y, 2)
    assert.equal(testRovers[0].headings, 'N')
    assert.deepEqual(testRovers[0].navigation, [ 'L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M' ])
    assert.equal(testRovers[1].x, 3)
    assert.equal(testRovers[1].y, 3)
    assert.equal(testRovers[1].headings, 'E')
    assert.deepEqual(testRovers[1].navigation, [ 'M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M' ])
    assert.equal(testRovers[2].x, 2)
    assert.equal(testRovers[2].y, 1)
    assert.equal(testRovers[2].headings, 'W')
    assert.deepEqual(testRovers[2].navigation, [ 'L', 'M', 'L', 'M', 'M', 'L', 'M', 'L', 'M' ])
  })
})

describe('placeRovers', function() {
  let testGrid = new Grid(5, 5)
  let testRovers = assets.createRovers([ 'input/rover1.txt', 'input/rover2.txt', 'input/rover3.txt' ])

  it ('should place Rovers on Grid', function() {
    testRovers.map(rover => {
      testGrid.placeRover(rover)
    })
    assert.isArray(testGrid.rovers)
    assert.equal(testGrid.rovers[0], testRovers[0])
    assert.equal(testGrid.rovers[1], testRovers[1])
    assert.equal(testGrid.rovers[2], testRovers[2])
  })
})

describe('updateLocations', function(){
  let testGrid = new Grid(5, 5)
  let testRovers = assets.createRovers([ 'input/rover1.txt', 'input/rover2.txt', 'input/rover3.txt' ])
  testGrid.placeRover(testRovers[0])
  assets.updateLocations(testGrid.rovers, testGrid)

  it ('should still be an instance of Rover', function(){
    testGrid.rovers.map(rover => { assert.instanceOf(rover, Rover) })
  })

  it ('should move Rovers to new locations, return new x & y coordinates, headings and empty navigation', function(){
    testGrid.rovers.map(rover => {
      assert.equal(rover.x, '1')
      assert.equal(rover.y, '3')
      assert.equal(rover.headings, 'N')
      assert.deepEqual(rover.navigation, [])
    })
  })
})


describe('createFile', function() {
  let testGrid = new Grid(5, 5)
  let testRovers = assets.createRovers([ 'input/rover1.txt', 'input/rover2.txt', 'input/rover3.txt' ])
  testGrid.placeRover(testRovers[0])
  assets.updateLocations(testGrid.rovers, testGrid)
  assets.createFile(testGrid.rovers)

  it('should return true if file exists', function(){
    assert.isTrue(fs.existsSync("./output/rover1.txt"));
  })

})