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
 *
 * 12: Sizes of ships altogether
 */

class GameBoard {
  /**
   *
   * @returns A boolean indicating whether all of the ships have been sunk
   */
  constructor(shipName) {
    this.shipName = shipName;
    this.ship = Ship(this.shipName);
    this.boardMatrix = this.#initializeBoard();
  }

  get allSunk() {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        // 7 is the number that indicates that a ship was destroyed
        if (this.boardMatrix[i][j] === 7) {
          count++;
        }
      }
    }

    // 12 is the total of sizes, reaching 12 means all ships
    // are destroyed
    if (count >= 12) {
      return count;
    }

    return count;
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
  // #_identifyShip(boardValue) {
  //   if (boardValue === 1) {
  //     return 'CARRIER';
  //   } else if (boardValue === 2) {
  //     return 'BATTLESHIP';
  //   } else if (boardValue === 3) {
  //     return 'CRUISER';
  //   } else if (boardValue === 4) {
  //     return 'SUBMARINE';
  //   } else if (boardValue === 5) {
  //     return 'DESTROYER';
  //   }
  // }

  /**
   * @param {Integer} i Contains the row
   * @param {Integer} j Contains the column
   * @param {Char} axis Contains the ship axis
   */
  placeShip(i, j, axis) {
    //   TODO: Make this production ready
    // Rather than a testing method
    while (this.ship.shipLength > 0) {
      // Adding corresponding number to mark that ship exists
      if (this.ship.shipName === 'CARRIER') {
        this.boardMatrix[i][j] = 1;
      } else if (this.ship.shipName === 'BATTLESHIP') {
        this.boardMatrix[i][j] = 2;
      } else if (this.ship.shipName === 'CRUISER') {
        this.boardMatrix[i][j] = 3;
      } else if (this.ship.shipName === 'SUBMARINE') {
        this.boardMatrix[i][j] = 4;
      } else if (this.ship.shipName === 'DESTROYER') {
        this.boardMatrix[i][j] = 5;
      }
      if (axis === 'x') j++;
      if (axis === 'y') i++;
      this.ship.shipLength--;
    }
  }

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
        this.ship.hit({ row: i, column: j });
        // After hitting the ship mark the spot as hit by assigning 7
        this.boardMatrix[i][j] = 7;
      }
    }
  }
}

module.exports = GameBoard;

const testInstance = new GameBoard('CARRIER');
