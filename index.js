import { addGenre } from "./modules/addGenre.js";
import { render } from "./modules/render.js";
import { home } from "./modules/home.js";
import { quote } from "./modules/home.js";
import { contact } from "./modules/contact.js";
import changeReadStatus from "./modules/changeReadStatus.js";

const genreForm = document.querySelector('[data-genre-form]');
const genreInput = document.querySelector('.genre-input');

const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');

quote.classList.toggle('inactive', false);

homeBtn.addEventListener('click', home);
contactBtn.addEventListener('click', contact);

const libraryCollection = JSON.parse(localStorage.getItem('libraryCollection'));
if (!libraryCollection) localStorage.setItem('libraryCollection', '[]');

genreForm.addEventListener('submit', () => {
  addGenre(genreInput.value);
  render();
  genreInput.value = '';
});

render();