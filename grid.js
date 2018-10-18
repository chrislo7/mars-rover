class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rovers = [];
  }

  placeRover(rover) {
    if (rover.x <= this.x && rover.y <= this.y) {
      this.rovers.push(rover)
    }
  }
}

module.exports = Grid;