const Player = require('./Player');

// Declare new instance for testing
const computerPlayer = new Player('computer');
const player = new Player('Farouk');

test('computer turn gets initialized to false', () => {
  expect(computerPlayer.isMyTurn).toBe(false);
});

test('player turn gets initialized to true', () => {
  expect(player.isMyTurn).toBe(true);
});

test('defines computerMove function', () => {
  expect(typeof player.computerMove).toBe('function');
});

test('computerMove() returns undefined when called', () => {
  expect(player.computerMove()).toBeUndefined();
});

test('check if name is defined', () => {
  expect(player.name).toBeDefined();
});
