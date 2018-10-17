const fs = require('fs')

// read data from txt file, splits input to string and then to array by lines
const takeInput = (filepath) => {
  return fs.readFileSync(filepath).toString().split("\n")
}

const gridSize = takeInput('input/input-data.txt')[0].split(' ').map(str => { return parseInt(str, 10)})
const startingPosition = takeInput('input/input-data.txt')[1].split(' ').map(str => { return str.toUpperCase() })
const movement = takeInput('input/input-data.txt')[2].split('').map(str => { return str.toUpperCase() })

console.log(movement)

const leftTurn = (dir) => {
  switch (dir) {
    case 'N':
      return 'W'
      break;
    case 'S':
      return 'E'
      break;
    case 'E':
      return 'N'
      break;
    case 'W':
      return 'S'
      break;
  }
}

const rightTurn = (dir) => {
  switch (dir) {
    case 'N':
      return 'E'
      break;
    case 'S':
      return 'W'
      break;
    case 'E':
      return 'S'
      break;
    case 'W':
      return 'N'
      break;
  }
}

module.exports = {
  takeInput: takeInput,
  gridSize: gridSize,
  startingPosition: startingPosition,
  movement: movement,
  leftTurn: leftTurn,
  rightTurn: rightTurn
}