import galeryItems from '../templates/galery-items.hbs';
import menu from './menu.json';
import '../css/styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const listContainer = document.querySelector('.js-menu');
const listMarkup = createListMarkup(menu);

listContainer.insertAdjacentHTML('beforeend', listMarkup);

function createListMarkup(menu) {
  return galeryItems(menu);
}
