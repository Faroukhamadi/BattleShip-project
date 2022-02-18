const Ship = require('./Ship');

/*
 * Numbers Used to indicate different classes of ships:
 * 1: Carrier
 * 2: Battleship
 * 3: Cruiser
 * 4: Submarine
 * 5: Destroyer
 *
 * Numbers Used to indicate different states of board:
 * 6: Missed Shot
 * 7: Destroyed
 */

class GameBoard {
  /**
   *
   * @returns A boolean indicating whether all of the ships have been sunk
   */
  constructor() {
    this.carrier = Ship('carrier', 5, []);
    this.battleship = Ship('battleship', 4, []);
    this.cruiser = Ship('cruiser', 3, []);
    this.submarine = Ship('submarine', 3, []);
    this.destroyer = Ship('destroyer', 2, []);
    this.ships = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
    ];
    this.boardMatrix = this.#initializeBoard();
  }

  get allSunk() {
    for (const ship of this.ships) {
      if (ship.shipHasSunk === false) {
        return false;
      }
    }
    return true;
  }

  /**
   * @returns a matrix initialized with zeros
   */
  #initializeBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    return board;
  }

  /**
   * @param {Integer} shipSize Contains the size of the ship
   * @param {Integer} boardValue Contains the value of the ship in the board
   * @returns The name of the ship
   */
  #_identifyShip(boardValue) {
    switch (boardValue) {
      case 1:
        return 'carrier';
      case 2:
        return 'battleship';
      case 3:
        return 'cruiser';
      case 4:
        return 'submarine';
      case 5:
        return 'destroyer';
      default:
        return;
    }
  }

  /**
   * @param {Integer} i Contains the row
   * @param {Integer} j Contains the column
   * @param {Char} axis Contains the ship axis
   */
  placeShip(i, j, axis, index) {
    let shipSize = this.ships[index].shipLength;
    while (shipSize > 0) {
      // Adding corresponding number to mark that ship exists
      if (this.ships[index].shipName === 'carrier') {
        this.boardMatrix[i][j] = 1;
      } else if (this.ships[index].shipName === 'battleship') {
        this.boardMatrix[i][j] = 2;
      } else if (this.ships[index].shipName === 'cruiser') {
        this.boardMatrix[i][j] = 3;
      } else if (this.ships[index].shipName === 'submarine') {
        this.boardMatrix[i][j] = 4;
      } else if (this.ships[index].shipName === 'destroyer') {
        this.boardMatrix[i][j] = 5;
      }
      if (axis === 'x') j++;
      if (axis === 'y') i++;
      shipSize--;
    }
  }

  // Spaghetti code close your eyes, will fix this once application is working
  // IMPORTANT: This could be fixed using index manipulation by not entering the function
  _isLegalMove(row, col, shipLength, axis, boardMatrix) {
    if (
      row === undefined ||
      col === undefined ||
      shipLength === undefined ||
      axis === undefined ||
      row >= 10 ||
      col >= 10 ||
      col + shipLength - 1 >= 10 ||
      row + shipLength - 1 >= 10 ||
      boardMatrix[row][col + shipLength - 1] === undefined ||
      boardMatrix[row + shipLength - 1][col] === undefined
    ) {
      return false;
    }
    if (axis === 'x' && col + shipLength < 10) {
      for (let j = col; j < col + shipLength; j++) {
        if (boardMatrix[row][j] === undefined || boardMatrix[row][j] !== 0) {
          return false;
        }
      }
    } else if (axis === 'y' && row + shipLength < 10) {
      for (let i = row; i < row + shipLength; i++) {
        if (boardMatrix[i][col] === undefined || boardMatrix[i][col] !== 0) {
          return false;
        }
      }
    }
    if (col + shipLength >= 10 || row + shipLength >= 10) return false;
    return true;
  }

  // Helper function, belongs to the spaghetti code part
  // IMPORTANT: this can be fixed after we get our app up and running
  placeShipsComputer() {
    for (let i = 0; i < this.ships.length; i++) {
      // pick axis randomly
      let axisArr = ['x', 'y'];
      let axis = axisArr[Math.floor(Math.random() * 2)];
      let row, col;
      do {
        row = Math.floor(Math.random() * 11);
        col = Math.floor(Math.random() * 11);
      } while (
        this._isLegalMove(
          row,
          col,
          this.ships[i].shipLength,
          axis,
          this.boardMatrix
        ) === false
      );
      if (axis === 'x') {
        for (let index = col; index < col + this.ships[i].shipLength; index++) {
          this.boardMatrix[row][index] = 1;
        }
      } else if (axis === 'y') {
        for (let index = row; index < row + this.ships[i].shipLength; index++) {
          this.boardMatrix[index][col] = 1;
        }
      }
    }
  }

  /**
   *
   * @param {Integer} row Contains the row to check whether valid or not
   * @param {Integer} col Contains the col to check whether valid or not
   * @param {Integer} shipLength Contains the shipLength of element in ship array
   * @param {Char} axis Contains the axis of our ship placement
   * @param {Array} boardMatrix Contains a 2d array board
   * @returns a boolean indicating whether the move is legal or not
   */

  /**
   * @param {Integer} i Contains starting row of the attack
   * @param {Integer} j Contains starting column of the attack
   * Assigns to board 6 if missed and 7 if hit
   */
  receiveAttack(i, j) {
    // If value is '0' then shot is missed
    if (this.boardMatrix[i][j] === 0) {
      this.boardMatrix[i][j] = 6;
    } else {
      // Record coordinates of shot
      if (this.boardMatrix[i][j] !== 0 && this.boardMatrix[i][j] !== 6) {
        let shipName = this.#_identifyShip(this.boardMatrix[i][j]);
        const indexOfShip = this.ships.findIndex(
          (element) => element.shipName === shipName
        );
        this.ships[indexOfShip].hit({ row: i, column: j });
        // After hitting the ship mark the spot as hit by assigning 7
        this.boardMatrix[i][j] = 7;
      }
    }
  }
}

module.exports = GameBoard;
