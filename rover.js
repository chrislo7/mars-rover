const fs = require('fs')

// read data from txt file, splits input to string and then to array by lines
const takeInput = (filepath) => {
  return fs.readFileSync(filepath).toString().split("\n")
}

const gridSize = takeInput('input/input-data.txt')[0].split(' ').map(str => { return parseInt(str, 10)})
const startingPosition = takeInput('input/input-data.txt')[1].split(' ')
const movement = takeInput('input/input-data.txt')[2].split('')

console.log(movement)


module.exports = {
  takeInput: takeInput,
  gridSize: gridSize,
  startingPosition: startingPosition,
  movement: movement
}

