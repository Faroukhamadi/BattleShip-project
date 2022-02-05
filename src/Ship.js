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
