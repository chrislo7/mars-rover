const fs = require('fs')

// read data from txt file, splits input to string and then to array by lines
const takeInput = (filepath) => {
  return fs.readFileSync(filepath).toString().split("\n")
}

module.exports = {
  takeInput: takeInput
}

