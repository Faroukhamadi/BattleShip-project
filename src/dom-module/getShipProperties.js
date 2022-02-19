/**
 *  Get Array of objects that have following attributes:
 *  name
 *  row
 *  column
 *  axis
 * @returns array of objects
 */
export default function _getShipProperties() {
  let tempShipProperties = [];
  let tempProperties = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== 'name') {
      tempProperties = JSON.parse(localStorage.getItem(key));
      tempShipProperties.push({
        name: key,
        row: tempProperties[0],
        column: tempProperties[1],
        axis: tempProperties[2],
      });
    }
  }
  return tempShipProperties;
}
