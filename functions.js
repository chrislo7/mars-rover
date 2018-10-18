const fs = require('fs')
const Rover = require('./rover.js')

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
  let positionArr = []
  let rovers = []

  input.map(filepath => {
    positionArr.push( inputData(filepath)[0].map(str => { return str.toUpperCase() }) )
  })

  positionArr.map(pos => { rovers.push ( new Rover(pos[0], pos[1], pos[2]) ) })
  return rovers
}

module.exports = {
  inputData: inputData,
  leftTurn: leftTurn,
  rightTurn: rightTurn,
  navigate: navigate,
  createRovers: createRovers
}