import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import domManipulation from './DOM';
import _getShipProperties from './dom-module/getShipProperties';

domManipulation();

// if first child of main is grid1 container then we're at thirdView
const main = document.querySelector('main');
if (main.firstElementChild.className === 'grid1-container') {
  console.log("Yayy we're at third view");

  // create Player/Computer Board instance
  const playerGameboard = new GameBoard();
  const computerGameboard = new GameBoard();

  // generate boards (player requires more work since it depends on localStorage)
  computerGameboard.placeShipsComputer();
  let localStorageFetch = _getShipProperties();
  let carrier = localStorageFetch.find((prop) => prop.name === 'CARRIER');
  let battleship = localStorageFetch.find((prop) => prop.name === 'BATTLESHIP');
  let cruiser = localStorageFetch.find((prop) => prop.name === 'CRUISER');
  let submarine = localStorageFetch.find((prop) => prop.name === 'SUBMARINE');
  let destroyer = localStorageFetch.find((prop) => prop.name === 'DESTROYER');
  let localStorageFetchSorted = [
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer,
  ];

  // Placing ships fetched from localStorage
  for (let [index, ship] of localStorageFetchSorted.entries()) {
    console.log(`Executing for the ${index} time.`);
    playerGameboard.placeShip(
      ship.row,
      ship.column,
      ship.axis.toLowerCase(),
      index
    );
  }

  console.log(playerGameboard.boardMatrix);
}
