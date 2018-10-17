const assert = require('chai').assert;
const takeInput = require('../rover.js').takeInput;
const gridSize = require('../rover.js').gridSize;
const startingPosition = require('../rover.js').startingPosition;

describe('takeInput', function() {
  it ('should take input from text file', function(){
    let result = takeInput('input/input-data.txt')
    assert.exists(result, 'input is neither `null` nor `undefined`')
  })

  it ('should return array for each line within txt file', function(){
    let result = takeInput('input/input-data.txt')
    assert.isArray(result, 'input is an array')
  })
})

describe('gridSize', function() {
  it ('should return an array with two elements', function(){
    assert.exists(gridSize[0], 'first element exists')
    assert.exists(gridSize[1], 'second element exists')
    assert.notExists(gridSize[2], 'a third element does not exist')
  })

  it ('should return an array with two numbers', function(){
    assert.isNumber(gridSize[0], 'element is a number')
    assert.isNumber(gridSize[1], 'element is a number')
  })
})

describe('startingPosition', function() {
  it ('should return an array with three elements', function(){
    assert.exists(startingPosition[0], 'first element exists')
    assert.exists(startingPosition[1], 'second element exists')
    assert.exists(startingPosition[2], 'third element exists')
    assert.notExists(startingPosition[3], 'a fourth element does not exist')
  })
})


