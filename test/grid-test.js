const chai = require('chai')
const assert = require('chai').assert;
const expect = require('chai').expect;
const Grid = require('../grid.js');


describe('Grid Class', function() {
  let testGrid1 = new Grid(1, 2);
  let testGrid2 = new Grid(6, 3);
  it('should define a grid', function() {
    assert.exists(Grid)
  })

  it('should have x and y coordinates', function() {
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