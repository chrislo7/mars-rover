const fs = require('fs');
const Rover = require('./rover.js');
const Grid = require('./grid.js');
const fn = require('./functions.js');

let input = process.argv.slice(2)

//defines X and Y coordinates for grid
let grid = fn.inputData(input[0])[0].map(str => { return parseInt(str, 10) })

// Slices input to remove grid settings line
input = input.slice(1)

const createRovers = (input) => {
  let positionArr = []
  let rovers = []

  input.map(filepath => {
    positionArr.push( fn.inputData(filepath)[0].map(str => { return str.toUpperCase() }) )
  })

  positionArr.map(pos => { rovers.push ( new Rover(pos[0], pos[1], pos[2]) ) })
  return rovers
}


let Mars = new Grid(grid[0], grid[1])
let Rovers = createRovers(input)


// const startingPosition = inputData('input/input-data.txt')[1].map(str => { return str.toUpperCase() })
// const movement = inputData('input/input-data.txt')[2].map(str => { return str.toUpperCase() })

// const roverPosition = navigate(startingPosition, movement)
