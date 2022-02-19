import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
import zeros from './zeros';
import thirdView from './thirdView';
import gameLogic from '../gameLogic';

/**
 * This is a helper function that helps us render the grid
 * place our ships after entering the name
 */
export default function () {
  let shipNames = [
    'CARRIER',
    'BATTLESHIP',
    'CRUISER',
    'SUBMARINE',
    'DESTROYER',
  ];
  let shipSizes = [5, 4, 3, 3, 2];
  let shipIndex = 0;
  const main = document.querySelector('main');
  const placingContainer = document.createElement('div');
  placingContainer.className = 'placing-container';
  const title = document.createElement('h1');
  title.id = 'placing-desc';
  title.textContent = `${localStorage.getItem('name')}, PLACE YOUR ${
    shipNames[shipIndex]
  }`;
  let axisButton = document.createElement('button');
  axisButton.id = 'axis-btn';
  axisButton.textContent = 'AXIS: X';
  const grid = document.createElement('div');
  grid.className = 'grid';
  placingContainer.appendChild(title);
  placingContainer.appendChild(axisButton);
  placingContainer.appendChild(grid);

  // Places 100 divs making a BattleShip board
  for (let i = 0; i < 100; i++) {
    let columnPlacing = document.createElement('div');
    columnPlacing.className = 'column-placing';
    grid.appendChild(columnPlacing);
  }

  // Makes the page invisible for the unfade function to work
  main.style.visibility = 'hidden';
  main.appendChild(placingContainer);

  // unfade effect
  unfade(main);

  _toggleAxis(axisButton, shipSizes, shipIndex, shipNames);
  _shipRendering(shipSizes, shipIndex, shipNames);
}

/**
 * Renders the ship based on its size and doesn't allow
 * you to go over the limit of the matrix while placing ships
 */

function _shipRendering(shipSizes, shipIndex, shipNames) {
  let axisButton = document.getElementById('axis-btn');
  // Filling the matrix with the board divs
  const columnPlacing = document.querySelectorAll('.column-placing');
  let tempArray = Array.from(columnPlacing);
  // Call function that initializes the board to zeros
  let board = zeros([10, 10]);
  let k = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = tempArray[k];
      k++;
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j].addEventListener('mouseenter', () => {
        let k = axisButton.textContent === 'AXIS: X' ? j : i;
        for (
          let index = k;
          index < k + shipSizes[shipIndex] && index < 10;
          index++
        ) {
          if (axisButton.textContent === 'AXIS: X') {
            // Change styling to indicate that we're out of bounds
            if (j > 10 - shipSizes[shipIndex]) {
              // Don't overwrite and existing ship
              // TODO: Do something to prevent placing ships on top
              // of ships
              if (board[i][j].style.background === 'rgba(222, 228, 228, 0.7)')
                board[i][j].style.cursor = 'not-allowed';
              else {
                board[i][j].style.background = 'rgba(255, 0, 0, 0.6)';
                board[i][j].style.cursor = 'not-allowed';
              }
              break;
            }

            // Give preview if we're not out of bounds
            board[i][index].style.background = 'rgba(222, 228, 228, 0.7)';
          } else if (axisButton.textContent === 'AXIS: Y') {
            // Change styling to indicate that we're out of bounds
            if (i > 10 - shipSizes[shipIndex]) {
              // Don't overwrite and existing ship
              if (board[i][j].style.background === 'rgba(222, 228, 228, 0.7)')
                board[i][j].style.cursor = 'not-allowed';
              else {
                board[i][j].style.cursor = 'not-allowed';
                board[i][j].style.background = 'rgba(255, 0, 0, 0.6)';
              }
              break;
            }
            // Give preview if we're not out of bounds
            board[index][j].style.background = 'rgba(222, 228, 228, 0.7)';
          }
        }
      });

      board[i][j].addEventListener('mouseleave', () => {
        let k = axisButton.textContent === 'AXIS: X' ? j : i;
        for (
          let index = k;
          index < k + shipSizes[shipIndex] && index < 10;
          index++
        ) {
          if (
            axisButton.textContent === 'AXIS: X' &&
            board[i][index].dataset.filled !== 'true'
          ) {
            board[i][index].style.background = 'none';
          } else if (
            axisButton.textContent === 'AXIS: Y' &&
            board[index][j].dataset.filled !== 'true'
          ) {
            board[index][j].style.background = 'none';
          }
        }
      });

      board[i][j].addEventListener('click', () => {
        let k = axisButton.textContent === 'AXIS: X' ? j : i;
        for (
          let index = k;
          index < k + shipSizes[shipIndex] && index < 10;
          index++
        ) {
          if (axisButton.textContent === 'AXIS: X') {
            // Change bg-color permanently
            board[i][index].style.background = 'rgba(222, 228, 228, 0.7)';
            // Mark the clicked column so that we don't remove
            board[i][index].dataset.filled = 'true';
          } else if (axisButton.textContent === 'AXIS: Y') {
            // Change bg-color permanently
            board[index][j].style.background = 'rgba(222, 228, 228, 0.7)';
            // Mark the clicked column so that we don't remove
            board[index][j].dataset.filled = 'true';
          }
          // Stores coordinates and axis in a JSON string
          localStorage.setItem(
            shipNames[shipIndex],
            JSON.stringify([
              i,
              j,
              axisButton.textContent[axisButton.textContent.length - 1],
            ])
          );
        }
        // Increment shipIndex to get the right shipName array
        shipIndex++;

        /* If statement to not render undefined when we're done with
        the ships array */
        if (shipNames[shipIndex] === undefined) {
          document.getElementById(
            'placing-desc'
          ).textContent = `${localStorage.getItem('name')}, PLACE YOUR ${
            shipNames[shipIndex - 1]
          }`;
        } else {
          document.getElementById(
            'placing-desc'
          ).textContent = `${localStorage.getItem('name')}, PLACE YOUR ${
            shipNames[shipIndex]
          }`;
        }

        /* Condition to render next page is if we're done
            with placing ships and we've reached the end of
            shipSizes array */
        if (shipIndex > 4) {
          fade(document.querySelector('.placing-container'));
          setTimeout(() => {
            removeChildren(document.querySelector('main'));
          }, 3000);
          setTimeout(() => {
            thirdView();
          }, 3000);
        }
      });
    }
  }
}

/**
 * Toggles the axis of ship placing
 */
function _toggleAxis(axisButton, shipSizes, shipIndex, shipNames) {
  axisButton.addEventListener('click', () => {
    if (axisButton.textContent === 'AXIS: X') {
      axisButton.textContent = 'AXIS: Y';
    } else if (axisButton.textContent === 'AXIS: Y') {
      axisButton.textContent = 'AXIS: X';
    }
  });
  _shipRendering(shipSizes, shipIndex, shipNames);
}
