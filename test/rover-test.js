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

describe('takeInput', function() {
  it ('should take input from text file', function(){
    let result = assets.takeInput('input/input-data.txt')
    assert.exists(result, 'input is neither `null` nor `undefined`')
  })

  it ('should return array for each line within txt file', function(){
    let result = assets.takeInput('input/input-data.txt')
    assert.isArray(result, 'input is an array')
  })
})

describe('gridSize', function() {
  it ('should return an array with two elements', function(){
    assert.exists(assets.gridSize[0], 'first element exists')
    assert.exists(assets.gridSize[1], 'second element exists')
    assert.notExists(assets.gridSize[2], 'a third element does not exist')
  })

  it ('should return an array with two numbers', function(){
    assets.gridSize.map(num => { assert.isNumber(num, 'element is a number')})
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

// describe('leftTurn', function() {
//   it ('should show correct cardinal directions', function(){
//     assert.equals(assets.leftTurn('W'), )
//   })
// })

