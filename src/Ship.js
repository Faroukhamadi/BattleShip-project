// import { _getShipSize } from './dom-module/thirdView';
const _getShipSize = require('./getShipSize');
/**
 *
 * @param {String} shipName Contains the ship name
 * @param {Integer} shipLength Contains the length of the ship
 * @param {Array} shipDamageSpots Contains where the ship has been damaged
 * @param {Boolean} shipHasSunk Contains a boolean indicating whether the ship has sunk
 * @returns a Ship Object
 */

function Ship(shipName, shipDamageSpots = [], shipHasSunk = false) {
  return {
    shipName: shipName,
    shipLength: _getShipSize(shipName),
    shipDamageSpots,
    shipHasSunk,
    hit: (hitPosition) => {
      shipDamageSpots.push(hitPosition);
    },
    isSunk: () => {
      if (shipDamageSpots.length === shipLength) {
        return true;
      } else {
        return false;
      }
    },
  };
}

module.exports = Ship;
