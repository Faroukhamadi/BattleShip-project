import firstView from './dom-module/firstView';
import thirdView from './dom-module/thirdView';
import { secondView, secondViewRender } from './dom-module/secondView';

export default function domManipulation() {
  firstView();
  secondView();
}

// function _shipRendering(axisButton) {
//   if (axisButton.textContent === 'AXIS: X') {
//     for (let i = 0; i < 100; i++) {
//       let columnPlacing = document.querySelectorAll('.column-placing');
//       columnPlacing[i].addEventListener('mouseenter', () => {
//         /* If ship exceeds board, change aesthetics to indicate
//        that*/
//         if ((i + 5) % 10 === 1 || ((i + 5) % 10 <= 4 && (i + 5) % 10 !== 0)) {
//           columnPlacing[i].style.background = 'rgba(255, 0, 0, 0.6)';
//           columnPlacing[i].style.cursor = 'not-allowed';
//         } else {
//           // If it doesn't exceed board, change bg-color
//             for (let index = i; index < i + 5; index++) {
//               console.log('X');
//               columnPlacing[index].style.background =
//                 'rgba(222, 228, 228, 0.7)';
//             }

//         }
//       });
//       columnPlacing[i].addEventListener('mouseout', () => {
//         // Remove styling when mouse leaves div
//         for (let index = i; index < i + 5; index++) {
//           columnPlacing[index].style.background = 'none';
//         }
//       });
//     }
//   } else if (axisButton.textContent === 'AXIS: Y') {
//     // remove styles of 'AXIS: X'

//     for (let i = 0; i < 100; i++) {
//       let columnPlacing = document.querySelectorAll('.column-placing');
//       columnPlacing[i].addEventListener('mouseenter', () => {
//         /* If ship exceeds board, change aesthetics to indicate
//         that*/
//         if (i > 59) {
//           columnPlacing[i].style.background = 'rgba(255, 0, 0, 0.6)';
//           columnPlacing[i].style.cursor = 'not-allowed';
//         } else {
//           // If it doesn't exceed board, change bg-color
//             for (let index = i; index < i + 50; index += 10) {
//               console.log('Y');
//               columnPlacing[index].style.background =
//                 'rgba(222, 228, 228, 0.7)';
//             }
//         }
//       });
//       columnPlacing[i].addEventListener('mouseout', () => {
//         // Remove styling when mouse leaves div
//         for (let index = i; index < i + 50; index += 10) {
//           columnPlacing[index].style.background = 'none';
//         }
//       });
//     }
//   }
// }
