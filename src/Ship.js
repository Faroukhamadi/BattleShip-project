/**
 *
 * @param {String} shipName Contains the ship name
 * @param {Integer} shipLength Contains the length of the ship
 * @param {Array} shipDamageSpots Contains where the ship has been damaged
 * @param {Boolean} shipHasSunk Contains a boolean indicating whether the ship has sunk
 * @returns a Ship Object
 */

function Ship(shipName, shipLength, shipDamageSpots, shipHasSunk) {
  return {
    shipName,
    shipLength,
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

let ship1 = Ship('carrier', 5, [], false);
console.log(ship1);

module.exports = Ship;
