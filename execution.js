const fs = require('fs');
const fn = require('./functions.js');
const Rover = require('./rover.js');
const Grid = require('./grid.js');

let inputs = process.argv.slice(2)
let grid = fn.inputData(inputs[0])[0].map(str => { return parseInt(str, 10) })

// Slices inputs to remove grid settings line (ease of use)
inputs = inputs.slice(1)

let Mars = new Grid(grid[0], grid[1])
let Rovers = fn.createRovers(inputs)
Rovers.map(rover => {
  Mars.placeRover(rover)
})

fn.updateLocations(Mars.rovers, Mars)
fn.createFile(Mars.rovers)