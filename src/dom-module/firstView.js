import removeChildren from './removeChildren';
import { fade, unfade } from './fadeEffects';
import secondViewRender from './secondView';

export default function firstView() {
  const inputContainer = document.querySelector('.input-container');
  const inputField = document.getElementById('input-field');
  const startGame = document.getElementById('start-game');
  const main = document.querySelector('main');

  unfade(inputContainer);
  startGame.addEventListener('click', () => {
    localStorage.setItem('name', inputField.value.toUpperCase());
    fade(inputContainer);
    setTimeout(() => {
      removeChildren(main);
    }, 3000);
    setTimeout(() => {
      secondViewRender();
    }, 3000);
  });
}
