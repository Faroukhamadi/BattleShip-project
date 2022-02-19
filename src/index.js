import Ship from './Ship';
import GameBoard from './GameBoard';
import Player from './Player';
import domManipulation from './DOM';
import _getShipProperties from './dom-module/getShipProperties';
import game from './dom-module/game';
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
