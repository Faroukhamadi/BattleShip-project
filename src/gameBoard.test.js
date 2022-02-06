const GameBoard = require('./GameBoard');

// Declare new instance for testing
const gameBoard = new GameBoard();

test('board matrix gets initialized to a (10)row matrix', () => {
  expect(gameBoard.boardMatrix).toHaveLength(10);
});

test('board matrix gets initialized to a (10)col matrix', () => {
  expect(gameBoard.boardMatrix[0]).toHaveLength(10);
});

test('defines placeShip function', () => {
  expect(typeof gameBoard.placeShip).toBe('function');
});

test('receiveAttack() returns undefined when called', () => {
  expect(gameBoard.receiveAttack(3, 3)).toBeUndefined();
});

test('check if ships array is defined', () => {
  expect(gameBoard.ships).toBeDefined();
});
