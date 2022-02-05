import Ship from './Ship';

it('should initialize isSunk to false', () => {
  expect(Ship('carrier', 5, [], false).isSunk()).toBe(false);
});
