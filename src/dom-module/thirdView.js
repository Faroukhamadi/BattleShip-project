import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
export default function thirdView() {
  const main = document.querySelector('main');
  const grid1Container = document.createElement('div');
  grid1Container.className = 'grid1-container';
  const title1 = document.createElement('h1');
  title1.textContent = 'FRIENDLY WATERS';
  const grid1 = document.createElement('div');
  grid1.className = 'grid';
  main.appendChild(grid1Container);
  grid1Container.appendChild(title1);
  grid1Container.appendChild(grid1);

  for (let i = 0; i < 100; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    grid1.appendChild(column);
  }

  const grid2Container = document.createElement('div');
  grid2Container.className = 'grid2-container';
  const title2 = document.createElement('h1');
  title2.textContent = 'ENEMY WATERS';
  const grid2 = document.createElement('div');
  grid2.className = 'grid';
  main.appendChild(grid2Container);
  grid2Container.appendChild(title2);
  grid2Container.appendChild(grid2);

  for (let i = 0; i < 100; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    grid2.appendChild(column);
  }

  // Makes the page invisible for the unfade function to work
  main.style.visibility = 'hidden';
  unfade(main);
}

//  <!-- Third View -->

// <div class="grid2-container">
//   <h1>ENEMY WATERS</h1>
//   <div class="grid">
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//     <div class="column"></div>
//   </div>
// </div> -->

// <!--<div class="grid1-container">
//       <h1>FRIENDLY WATERS</h1>
//       <div class="grid">
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//         <div class="column"></div>
//       </div>
//     </div>
