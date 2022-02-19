import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import domManipulation from './DOM';
import _getShipProperties from './dom-module/getShipProperties';
import game from './dom-module/game';

export default function () {
  // if first child of main is grid1 container then we're at thirdView
  const main = document.querySelector('main');
  console.log(main.firstElementChild.className);
  if (main.firstElementChild.className === 'grid1-container') {
    // create Player/Computer Board instance
    const playerGameboard = new GameBoard();
    const computerGameboard = new GameBoard();

    // Create Player instances
    const player = new Player('Farouk');
    const computer = new Player('computer');

    // generate boards (player requires more work since it depends on localStorage)
    computerGameboard.placeShipsComputer();
    let localStorageFetch = _getShipProperties();
    let carrier = localStorageFetch.find((prop) => prop.name === 'CARRIER');
    let battleship = localStorageFetch.find(
      (prop) => prop.name === 'BATTLESHIP'
    );
    let cruiser = localStorageFetch.find((prop) => prop.name === 'CRUISER');
    let submarine = localStorageFetch.find((prop) => prop.name === 'SUBMARINE');
    let destroyer = localStorageFetch.find((prop) => prop.name === 'DESTROYER');
    let sortedLocalStorageFetch = [
      carrier,
      battleship,
      cruiser,
      submarine,
      destroyer,
    ];

    // Placing ships fetched from localStorage
    for (let [index, ship] of sortedLocalStorageFetch.entries()) {
      playerGameboard.placeShip(
        ship.row,
        ship.column,
        ship.axis.toLowerCase(),
        index
      );
    }

    console.log(
      'sheesh' + !playerGameboard.allSunk && !computerGameboard.allSunk
    );

    if (!playerGameboard.allSunk && !computerGameboard.allSunk) {
      game(playerGameboard, computerGameboard, computer);
      console.log('playerMatrix: ' + playerGameboard.boardMatrix);
      console.log('computerMatrix: ' + computerGameboard.boardMatrix);
    }
  }
}
