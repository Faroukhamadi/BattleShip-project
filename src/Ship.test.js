const Ship = require('./Ship');

test('should initialize isSunk to false', () => {
  expect(Ship('carrier', 5, []).isSunk()).toBe(false);
});

test('isSunk returns true if ship has been hit (length) times', () => {
  expect(Ship('battleship', 4, [0, 1, 2, 3]).isSunk()).toBe(true);
});

test('should convert entered shipName to lower case', () => {
  expect(Ship('CARRIER', 5, []).shipName).toBe('carrier');
});
