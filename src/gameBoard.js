const Ship = require('./Ship');

class gameBoard {
  constructor(boardMatrix) {
    this.boardMatrix = boardMatrix;
  }
  /**
   * @param {Integer} i Contains the row
   * @param {Integer} j Contains the column
   * @param {Char} axis Contains the ship axis
   */
  placeShip(i, j, axis) {
    const newShip = Ship('carrier', 5, []);
    if (axis === 'x') {
      let size = newShip.shipLength;
      while (size > 0) {
        this.boardMatrix[i][j] = 1;
        j++;
        size--;
      }
    } else if (axis === 'y') {
      let size = newShip.shipLength;
      while (size > 0) {
        this.boardMatrix[i][j] = 1;
        i++;
        size--;
      }
    }
  }
}
