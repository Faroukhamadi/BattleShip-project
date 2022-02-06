const Ship = require('./Ship');

/*
 * Numbers Used to indicate different classes of ships:
 * 1: Carrier
 * 2: Battleship
 * 3: Cruiser
 * 4: Submarine
 * 5: Destroyer
 * 6: Missed Shot
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
    this.allSunk = this.#haveAllBeenSunk();
  }

  #haveAllBeenSunk() {
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
    if (boardValue === 1) {
      return 'carrier';
    } else if (boardValue === 2) {
      return 'battleship';
    } else if (boardValue === 3) {
      return 'cruiser';
    } else if (boardValue === 4) {
      return 'submarine';
    } else if (boardValue === 5) {
      return 'destroyer';
    }
  }

  /**
   * @param {Integer} i Contains the row
   * @param {Integer} j Contains the column
   * @param {Char} axis Contains the ship axis
   */
  placeShip(i, j, axis) {
    //   TODO: Make this production ready
    // Rather than a testing method
    let shipSize = this.ships[0].shipLength;
    while (shipSize > 0) {
      // Adding corresponding number to mark that ship exists
      if (this.ships[0].shipName === 'carrier') {
        this.boardMatrix[i][j] = 1;
      } else if (this.ships[0].shipName === 'battleship') {
        this.boardMatrix[i][j] = 2;
      } else if (this.ships[0].shipName === 'cruiser') {
        this.boardMatrix[i][j] = 3;
      } else if (this.ships[0].shipName === 'submarine') {
        this.boardMatrix[i][j] = 4;
      } else if (this.ships[0].shipName === 'destroyer') {
        this.boardMatrix[i][j] = 5;
      }
      if (axis === 'x') j++;
      if (axis === 'y') i++;
      shipSize--;
    }
  }

  /**
   * @param {Integer} i Contains starting row of the attack
   * @param {Integer} j Contains starting column of the attack
   * @returns an array of [row, column] if missed, undefined if hit
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
      }
    }
  }
}

module.exports = GameBoard;
