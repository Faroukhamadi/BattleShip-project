/**
 * @param {Node} parent Contains Node that contains children to remove
 */
export default function removeChildren(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
