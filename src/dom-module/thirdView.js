import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
import _getShipProperties from './getShipProperties';

export default function thirdView() {
  const main = document.querySelector('main');
  const grid1Container = document.createElement('div');
  const grid2Container = document.createElement('div');
  const title1 = document.createElement('h1');
  const title2 = document.createElement('h1');
  const grid1 = document.createElement('div');
  const grid2 = document.createElement('div');
  grid1Container.className = 'grid1-container';
  grid2Container.className = 'grid2-container';
  grid1.className = 'grid';
  grid2.className = 'grid';
  title1.textContent = 'FRIENDLY WATERS';
  title2.textContent = 'ENEMY WATERS';

  // Append block 1
  main.appendChild(grid1Container);
  grid1Container.appendChild(title1);
  grid1Container.appendChild(grid1);

  // Append block 2
  main.appendChild(grid2Container);
  grid2Container.appendChild(title2);
  grid2Container.appendChild(grid2);

  // Rendering the Player Grid
  for (let i = 0; i < 100; i++) {
    const column = document.createElement('div');
    column.className = 'player-column';
    grid1.appendChild(column);
  }

  // Rendering the Computer Grid
  for (let i = 0; i < 100; i++) {
    const column = document.createElement('div');
    column.className = 'computer-column';
    grid2.appendChild(column);
  }

  // Makes the page invisible for the unfade function to work
  main.style.visibility = 'hidden';
  unfade(main);

  // Get x, y coordinates and axis from localStorage for rendering
  const shipProperties = _getShipProperties();

  // Use shipProperties to render user ships
  renderPlayerShips(shipProperties);
}

function renderPlayerShips(shipProperties) {
  // Initialize board with zeros
  let playerBoard = [];
  for (let i = 0; i < 10; i++) {
    playerBoard.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const playerColumns = document.querySelectorAll('.player-column');
  let tempArray = Array.from(playerColumns);
  let k = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      playerBoard[i][j] = tempArray[k];
      k++;
    }
  }

  // Loop through the generated array of objects
  for (let i = 0; i < shipProperties.length; i++) {
    // if axis is 'X' we render horizontally
    let shipSize = _getShipSize(shipProperties[i].name);
    let row = shipProperties[i].row;
    let column = shipProperties[i].column;
    if (shipProperties[i].axis === 'X') {
      for (let index = column; index < column + shipSize; index++) {
        playerBoard[row][index].style.backgroundColor = 'white';
      } // if axis is 'X' we render horizontally
    } else if (shipProperties[i].axis === 'Y') {
      for (let index = row; index < row + shipSize; index++) {
        playerBoard[index][column].style.backgroundColor = 'white';
      }
    }
  }
}

/**
 *
 * @param {String} shipName Contains the shipName from localStorage
 * @returns The shipSize
 */
function _getShipSize(shipName) {
  switch (shipName) {
    case 'CARRIER':
      return 5;
    case 'BATTLESHIP':
      return 4;
    case 'CRUISER':
      return 3;
    case 'SUBMARINE':
      return 3;
    case 'DESTROYER':
      return 2;
    default:
      return 'huh?';
  }
}
