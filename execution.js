const fs = require('fs');
const fn = require('./functions.js');
const Rover = require('./rover.js');
const Grid = require('./grid.js');

let inputs = process.argv.slice(2)

//defines X and Y coordinates for grid
let grid = fn.inputData(inputs[0])[0].map(str => { return parseInt(str, 10) })
// Slices inputs to remove grid settings line
inputs = inputs.slice(1)
console.log(inputs)

let Mars = new Grid(grid[0], grid[1])
let Rovers = fn.createRovers(inputs)
Rovers.map(rover => {
  Mars.placeRover(rover)
})


console.log(Mars.rovers)

Mars.rovers.map(rover => {
  console.log(fn.navigate([rover.x, rover.y, rover.headings], rover.navigation))
})



// const startingPosition = inputsData('inputs/inputs-data.txt')[1].map(str => { return str.toUpperCase() })
// const movement = inputsData('inputs/inputs-data.txt')[2].map(str => { return str.toUpperCase() })

// const roverPosition = navigate(startingPosition, movement)
