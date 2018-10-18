class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rovers = [];
  }

  placeRover(rover) {
    if (rover.x <= this.x &&
        rover.x >= 0 &&
        rover.y <= this.y &&
        rover.y >= 0) {
      this.rovers.push(rover)
    }
  }
}

module.exports = Grid;