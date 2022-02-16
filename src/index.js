import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import domManipulation from './DOM';

domManipulation();

// If we're in the thirdView, we start doing logic
let main = document.querySelector('main');
if (main.firstElementChild.className === 'grid1-container') {
  // Player instance of board
  const playerBoard = new GameBoard();

  // Computer instance of board
  const computerBoard = new GameBoard();
}
