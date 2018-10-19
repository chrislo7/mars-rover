class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rovers = [];
  }

  checkValidity(newRover) {
    if (newRover.x <= this.x && newRover.x >= 0 && newRover.y <= this.y && newRover.y >= 0) {
      for (let rover of this.rovers) {
        if (newRover.x === rover.x && newRover.y === rover.y) { return false }
      }
      return true
    }
  }

  placeRover(rover) {
    if (this.checkValidity(rover)) {
      this.rovers.push(rover)
    }
  }
}


module.exports = Grid;