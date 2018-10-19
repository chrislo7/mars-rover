const fs = require('fs')
const Rover = require('./rover.js')
const Grid = require('./grid.js')

// read data from txt file, splits input to string and then to an array by each line
// each line itself is also an array
const inputData = (filepath) => {
  return fs.readFileSync(filepath).toString().split("\n").map(elements => { return elements.split('') })
}

const leftTurn = (dir) => {
  switch (dir) {
    case 'N': return 'W'; break;
    case 'S': return 'E'; break;
    case 'E': return 'N'; break;
    case 'W': return 'S'; break;
  }
}

const rightTurn = (dir) => {
  switch (dir) {
    case 'N': return 'E'; break;
    case 'S': return 'W'; break;
    case 'E': return 'S'; break;
    case 'W': return 'N'; break;
  }
}

const navigate = (initialPosition, instructions) => {
  let x = initialPosition[0];
  let y = initialPosition[1];
  let heading = initialPosition[2];

  instructions.map(dir => {
    if (dir === 'L') {
      heading = leftTurn(heading);
    } else if (dir === 'R') {
      heading = rightTurn(heading);
    } else if (dir === 'M') {
      switch (heading) {
        case 'N': return y++; break;
        case 'S': return y--; break;
        case 'E': return x++; break;
        case 'W': return x--; break;
      }
    }
  })
  return [x, y, heading]
}

const createRovers = (input) => {
  let roverInfo = []
  let rovers = []

  input.map(filepath => {
    roverInfo.push(
      inputData(filepath)[0].map(str => { return str.toUpperCase()}),
      inputData(filepath)[1].map(str => { return str.toUpperCase()})
    )
  })

  for (let i = 0; i < roverInfo.length; i ++) {
    if(roverInfo[i].length === 3) {
      rovers.push(new Rover(roverInfo[i][0], roverInfo[i][1], roverInfo[i][2], roverInfo[i+1]))
    }
  }

  return rovers
}

const placeRovers = (input) => {
  input.map(rover => Grid.placeRovers(rover))
}

const updateLocations = (rovers, grid) => {
  let amount = rovers.length
  rovers.map(rover => {
    let originalCoordinates = [rover.x, rover.y, rover.headings]
    let newLocation = navigate([rover.x, rover.y, rover.headings], rover.navigation)
    let updatedRover = new Rover(newLocation[0], newLocation[1], newLocation[2], [])

    for (let originalRovers of rovers) {
      if (updatedRover.x === originalRovers.x && updatedRover.y === originalRovers.y) {
        console.log('A rover is already here, moving rover back')
      }
    }

    grid.placeRover(updatedRover)
  })

  grid.rovers = grid.rovers.slice(amount)
}

module.exports = {
  inputData: inputData,
  leftTurn: leftTurn,
  rightTurn: rightTurn,
  navigate: navigate,
  createRovers: createRovers,
  placeRovers: placeRovers,
  updateLocations: updateLocations
}