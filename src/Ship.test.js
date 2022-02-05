const Ship = require('./Ship');

it('should initialize isSunk to false', () => {
  expect(Ship('carrier', 5, [], false).isSunk()).toBe(false);
});
