import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
import zeros from './zeros';

/**
 * This is a helper function that helps us render the grid
 * place our ships after entering the name
 */
function secondViewRender() {
  const main = document.querySelector('main');
  const placingContainer = document.createElement('div');
  placingContainer.className = 'placing-container';
  const title = document.createElement('h1');
  title.textContent = 'FAROUK, PLACE YOUR CARRIER';
  let axisButton = document.createElement('button');
  axisButton.id = 'axis-btn';
  axisButton.textContent = 'AXIS: X';
  const grid = document.createElement('div');
  grid.className = 'grid';
  placingContainer.appendChild(title);
  placingContainer.appendChild(axisButton);
  placingContainer.appendChild(grid);

  let shipSizes = [5, 4, 3, 3, 2];
  let shipIndex = 0;
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

  _toggleAxis(axisButton);
  _shipRendering(shipSizes, shipIndex);
}

/**
 * Renders the ship based on its size and doesn't allow
 * you to go over the limit of the matrix while placing ships
 */

function _shipRendering(shipSizes, shipIndex) {
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
              board[i][j].style.cursor = 'not-allowed';
              board[i][j].style.background = 'red';
              break;
            }
            // Give preview if we're not out of bounds
            board[i][index].style.background = 'white';
          } else if (axisButton.textContent === 'AXIS: Y') {
            // Change styling to indicate that we're out of bounds
            if (i > 10 - shipSizes[shipIndex]) {
              board[i][j].style.cursor = 'not-allowed';
              board[i][j].style.background = 'red';
              break;
            }
            // Give preview if we're not out of bounds
            board[index][j].style.background = 'white';
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
          if (axisButton.textContent === 'AXIS: X') {
            board[i][index].style.background = 'none';
          } else if (axisButton.textContent === 'AXIS: Y') {
            board[index][j].style.background = 'none';
          }
        }
      });

      board[i][j].addEventListener('click', () => shipIndex++);
    }
  }
}

/**
 * Toggles the axis of ship placing
 */
function _toggleAxis(axisButton) {
  axisButton.addEventListener('click', () => {
    if (axisButton.textContent === 'AXIS: X') {
      axisButton.textContent = 'AXIS: Y';
    } else if (axisButton.textContent === 'AXIS: Y') {
      axisButton.textContent = 'AXIS: X';
    }
    _shipRendering();
  });
}

function secondView() {
  // Check if we're in the second page
}

export { secondViewRender, secondView };
