import galeryItems from '../templates/galery-items.hbs';
import menu from './menu.json';
import '../css/styles.css';

const listContainer = document.querySelector('.js-menu');
const listMarkup = galeryItems(menu);

listContainer.insertAdjacentHTML('beforeend', listMarkup);
