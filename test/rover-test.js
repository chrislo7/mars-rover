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
    assert.exists(result, 'input is neither `null` nor `undefined`')
  })

  it ('should return array for each line within txt file', function(){
    let result = assets.inputData('input/input-data.txt')
    assert.isArray(result, 'input is an array')
  })
})

describe('grid', function() {
  it ('should return an array with two elements', function(){
    assert.exists(assets.grid[0], 'first element exists')
    assert.exists(assets.grid[1], 'second element exists')
    assert.notExists(assets.grid[2], 'a third element does not exist')
  })

  it ('should return an array with two numbers', function(){
    assets.grid.map(num => { assert.isFinite(num, 'element is a finite number')})
  })

})

describe('startingPosition', function() {
  it ('should return an array with three elements', function(){
    assert.exists(assets.startingPosition[0], 'first element exists')
    assert.exists(assets.startingPosition[1], 'second element exists')
    assert.exists(assets.startingPosition[2], 'third element exists')
    assert.notExists(assets.startingPosition[3], 'a fourth element does not exist')
  })

  it ('should change third element to uppercase', function(){
    expect(assets.startingPosition[2]).to.be.uppercase
  })
})

describe('movement', function() {
  it ('should change all elements to uppercase', function() {
    assets.movement.map(str => {
      expect(str).to.be.uppercase
    })
  })
})

describe('leftTurn', function() {
  it ('should show correct cardinal directions for left turns', function(){
    assert.equal(assets.leftTurn('N'), 'W', 'returns W')
    assert.equal(assets.leftTurn('S'), 'E', 'returns E')
    assert.equal(assets.leftTurn('W'), 'S', 'returns S')
    assert.equal(assets.leftTurn('E'), 'N', 'returns N')
  })
})

describe('rightTurn', function() {
  it ('should show correct cardinal directions for right turns', function(){
    assert.equal(assets.rightTurn('N'), 'E', 'returns E')
    assert.equal(assets.rightTurn('S'), 'W', 'returns W')
    assert.equal(assets.rightTurn('W'), 'N', 'returns N')
    assert.equal(assets.rightTurn('E'), 'S', 'returns S')
  })
})

describe('navigate', function() {
  let result = assets.navigate(assets.startingPosition, assets.movement)

  it ('should return an array with three elements', function(){
    result.map( elements => { assert.exists(elements, 'element exists') })
    assert.notExists(result[3], 'a fourth element does not exist')
  })

  it ('should have numbers for first two elements', function() {
    assert.isFinite(result[0], 'element is a finite number')
    assert.isFinite(result[1], 'element is a finite number')
  })
})
