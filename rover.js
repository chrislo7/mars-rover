class Rover {
  constructor(x, y, headings, navigation) {
    this.x = x;
    this.y = y;
    this.headings = headings;
    this.navigation = navigation;
  }

  updateLocation(input) {
    this.x = input[0];
    this.y = input[1];
  }
}

module.exports = Rover