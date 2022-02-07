import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';

export default function secondView() {
  const main = document.querySelector('main');
  const placingContainer = document.createElement('div');
  placingContainer.className = 'placing-container';
  const title = document.createElement('h1');
  title.textContent = 'FAROUK, PLACE YOUR CARRIER';
  const axisButton = document.createElement('button');
  axisButton.id = 'axis-btn';
  axisButton.textContent = 'AXIS: X';
  const grid = document.createElement('div');
  grid.className = 'grid';
  // main.style.visibility = 'hidden';
  placingContainer.appendChild(title);
  placingContainer.appendChild(axisButton);
  placingContainer.appendChild(grid);
  for (let i = 0; i < 100; i++) {
    let columnPlacing = document.createElement('div');
    columnPlacing.className = 'column-placing';
    grid.appendChild(columnPlacing);
  }
  main.style.visibility = 'hidden';
  main.appendChild(placingContainer);
  unfade(main);
}

// <!-- Second View -->

// <!-- <div class="placing-container">
//   <h1>FAROUK, PLACE YOUR CARRIER</h1>
//   <button id="axis-btn">AXIS: X</button>
//   <div class="grid">
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//     <div class="column-placing"></div>
//   </div>
// </div> -->
