import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
import { secondView, secondViewRender } from './secondView';

export default function firstView() {
  const inputContainer = document.querySelector('.input-container');
  const startGame = document.getElementById('start-game');
  const main = document.querySelector('main');

  unfade(inputContainer);
  startGame.addEventListener('click', () => {
    fade(inputContainer);
    setTimeout(() => {
      removeChildren(main);
    }, 3000);
    setTimeout(() => {
      secondViewRender();
    }, 3000);
  });
}
