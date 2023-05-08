import { addGenre } from "./modules/addGenre.js";
import { render } from "./modules/render.js";

const genreForm = document.querySelector('[data-genre-form]');
const genreInput = document.querySelector('.genre-input');

const libraryCollection = JSON.parse(localStorage.getItem('libraryCollection'));
if (!libraryCollection) localStorage.setItem('libraryCollection', '[]');

genreForm.addEventListener('submit', () => {
  addGenre(genreInput.value);
  render();
});

render();