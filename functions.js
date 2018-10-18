const fs = require('fs')

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

// sets grid canvas for rovers
// sets starting position for rovers
// sets the navigation instructions for rovers
const grid = inputData('input/input-data.txt')[0].map(str => { return parseInt(str, 10) })
const startingPosition = inputData('input/input-data.txt')[1].map(str => { return str.toUpperCase() })
const movement = inputData('input/input-data.txt')[2].map(str => { return str.toUpperCase() })

const roverPosition = navigate(startingPosition, movement)

module.exports = {
  inputData: inputData,
  grid: grid,
  startingPosition: startingPosition,
  movement: movement,
  leftTurn: leftTurn,
  rightTurn: rightTurn,
  navigate: navigate
}