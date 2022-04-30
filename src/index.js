import domManipulation from './DOM';
import _getShipProperties from './dom-module/getShipProperties';
import gameLogic from './gameLogic';

domManipulation();
let timer = setInterval(() => {
  gameLogic();
  if (
    document.querySelector('main').firstElementChild.className ===
    'grid1-container'
  ) {
    clearInterval(timer);
  }
}, 2000);

gameLogic();
