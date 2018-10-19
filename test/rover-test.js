const chai = require('chai')
const assert = require('chai').assert;
const expect = require('chai').expect;
const Rover = require('../rover.js');


describe('Rover Class', function() {
  let testRover1 = new Rover(1, 2, 'W');
  let testRover2 = new Rover(3, 6, 'N');
  it('should define a Rover', function() {
    assert.exists(Rover)
  })

  it('should have x, y coordinates, headings and navigation instructions', function() {
    assert.equal(testRover1.x, 1)
    assert.equal(testRover1.y, 2)
    assert.equal(testRover1.headings, 'W')
    assert.equal(testRover2.x, 3)
    assert.equal(testRover2.y, 6)
    assert.equal(testRover2.headings, 'N')
  })
})