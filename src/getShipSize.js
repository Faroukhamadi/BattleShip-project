/**
 *
 * @param {String} shipName Contains the shipName from localStorage
 * @returns The shipSize
 */
function _getShipSize(shipName) {
  switch (shipName) {
    case 'CARRIER':
      return 5;
    case 'BATTLESHIP':
      return 4;
    case 'CRUISER':
      return 3;
    case 'SUBMARINE':
      return 3;
    case 'DESTROYER':
      return 2;
    default:
      return 'huh?';
  }
}

module.exports = _getShipSize;
