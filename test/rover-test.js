const chai = require('chai')
const assert = require('chai').assert;
const expect = require('chai').expect;
const assets = require('../rover.js');


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
    let result = assets.inputData('input/input-data.txt')
    assert.exists(result)
  })

  it ('should return array for each line within txt file', function(){
    let result = assets.inputData('input/input-data.txt')
    assert.isArray(result)
  })
})

describe('grid', function() {
  it ('should return an array with two elements', function(){
    assert.exists(assets.grid[0])
    assert.exists(assets.grid[1])
    assert.notExists(assets.grid[2])
  })

  it ('should return an array with two numbers', function(){
    assets.grid.map(num => { assert.isFinite(num)})
  })

})

describe('startingPosition', function() {
  it ('should return an array with three elements', function(){
    assert.exists(assets.startingPosition[0])
    assert.exists(assets.startingPosition[1])
    assert.exists(assets.startingPosition[2])
    assert.notExists(assets.startingPosition[3])
  })

  it ('should change third element to uppercase', function(){
    expect(assets.startingPosition[2]).to.be.uppercase
  })
})

describe('movement', function() {
  it ('should change all elements to uppercase', function() {
    assets.movement.map(str => { expect(str).to.be.uppercase })
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
  let result = assets.navigate(assets.startingPosition, assets.movement)

  it ('should return an array with three elements', function(){
    result.map( elements => { assert.exists(elements) })
    assert.notExists(result[3])
  })

  it ('should have numbers for first two elements', function() {
    assert.isFinite(result[0])
    assert.isFinite(result[1])
  })
})
