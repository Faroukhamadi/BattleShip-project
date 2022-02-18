export default function game() {
  const computerColumns = document.querySelectorAll('.computer-column');

  for (const column of computerColumns) {
    column.addEventListener('mouseenter', () => {
      // column.style.cursor = 'crosshair';
    });
  }

  // mouseenter / mouseleave
}
