const assert = require('chai').assert;
const takeInput = require('../rover.js').takeInput;

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