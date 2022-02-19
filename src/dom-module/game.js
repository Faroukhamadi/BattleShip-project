import zeros from './zeros';
export default function game(playerGameboard, computerGameboard, computer) {
  const computerColumns = document.querySelectorAll('.computer-column');
  let tempArray = Array.from(computerColumns);

  // Call function that initializes the board to zeros
  let board = zeros([10, 10]);

  // Setting computer board variable to board dom elements
  let k = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board[i][j] = tempArray[k];
      k++;
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // Listen for clicks in the computer board
      board[i][j].addEventListener('click', () => {
        console.log('executed');
        // whenever player clicks, computer receives attack
        computerGameboard.receiveAttack(i, j);
        if (computerGameboard.allSunkComputer) {
          alert(`${localStorage.getItem('name')} has won.`);
        }
        //set timeout of 3 seconds before player gets attacked by computer
        setTimeout(() => {
          computer.computerMove(playerGameboard);
          if (playerGameboard.allSunk) {
            alert('Computer has won. Hard luck');
          }
        }, 3000);
      });
    }
  }
  // mouseenter / mouseleave
}
