class Player {
  constructor(name) {
    this.name = name;
    if (name === 'computer') {
      this.isMyTurn = false;
    } else {
      this.isMyTurn = true;
    }
  }

  /**
   * Makes a random move for the computer player
   */
  computerMove(playerGameBoard) {
    if (this.name === 'computer') {
      let row, col;
      do {
        row = Math.floor(Math.random() * 11);
        col = Math.floor(Math.random() * 11);
      } while (
        this.#isLegalMove(row, col, playerGameBoard.boardMatrix) === false
      );
      playerGameBoard.receiveAttack(row, col);
    }
  }

  /**
   *
   * @param {Integer} row Contains a row coordinate to determine whether it's legal or not
   * @param {Integer} col Contains a column coordinate to determine whether it's legal or not
   * @param {Object} playerBoard Contains an instance of the GameBoard class
   * @returns True if the move is legal and False otherwise
   */
  #isLegalMove(row, col, playerBoard) {
    if (this.name === 'computer') {
      // 6 means missed and 7 means destroyed, not a valid move
      if (playerBoard[row][col] >= 6) return false;
      return true;
    }
  }
}

module.exports = Player;
