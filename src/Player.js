const Ship = require('./Ship');
const GameBoard = require('./GameBoard');

class Player {
  constructor(name) {
    this.name = name;
    if (name === 'computer') {
      this.isMyTurn = false;
    } else {
      this.isMyTurn = true;
    }
  }

  computerMove() {
    if (this.name === 'computer') {
      const gameBoard = new GameBoard();
      let row, col;
      do {
        row = Math.floor(Math.random() * 11);
        col = Math.floor(Math.random() * 11);
      } while (this.isLegalMove(row, col, gameBoard) === false);
      gameBoard.receiveAttack(row, col);
    }
  }

  /**
   *
   * @param {Integer} row Contains a row coordinate to determine whether it's legal or not
   * @param {Integer} col Contains a column coordinate to determine whether it's legal or not
   * @param {Object} gameBoard Contains an instance of the GameBoard class
   * @returns True if the move is legal and False otherwise
   */
  isLegalMove(row, col, gameBoard) {
    if (this.name === 'computer') {
      // 6 means missed and 7 means destroyed, not a valid move
      if (gameBoard[row][col] >= 6) return false;
      return true;
    }
  }
}
