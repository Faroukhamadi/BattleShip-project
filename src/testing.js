const Ship = require('./Ship');

/*
 * Numbers Used to indicate different classes of ships:
 * 1: Carrier
 * 2: Battleship
 * 3: Cruiser
 * 4: Submarine
 * 5: Destroyer
 * 6: Missed Shot
 */
class GameBoard {
  constructor() {
    this.carrier = Ship('carrier', 5, []);
    this.battleship = Ship('battleship', 4, []);
    this.cruiser = Ship('cruiser', 3, []);
    this.submarine = Ship('submarine', 3, []);
    this.destroyer = Ship('destroyer', 2, []);
    this.ships = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
    ];
  }

  haveAllBeenSunk() {
    for (const ship of this.ships) {
      if (ship.shipHasSunk === false) {
        return false;
      }
    }
    return true;
  }

  // haveAllBeenSunk() {
  //   this.ships.forEach(function (ship) {
  //     console.log(ship.shipHasSunk);
  //     if (ship.shipHasSunk === false) {
  //       console.log('executed');
  //       return false;
  //     }
  //   });
  //   return true;
  // }
}

const gameboard = new GameBoard();
console.log(gameboard.haveAllBeenSunk());
// gameboard.ships.forEach((ship) => {
//   console.log(ship.shipHasSunk);
// });
