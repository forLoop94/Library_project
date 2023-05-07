import display from "./display.js";
import addBook from "./addBook.js";

const genreDisplay = document.querySelector('.genre-display');
const formSection = document.querySelector('.form-section');

export default () => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  genreDisplay.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const eachGenre = arr[i];
    const menuContent = document.createElement('div');
    menuContent.className = 'genre-class';
    menuContent.setAttribute('id', eachGenre.name);
    menuContent.innerHTML = `<div>${eachGenre.name}</div>`;
    genreDisplay.appendChild(menuContent);
  }
  const allGenre = document.querySelectorAll('.genre-class');

  allGenre.forEach((genre) => {
    genre.addEventListener('click', (e) => {
      const div = e.target.parentNode;
      const privateID = div.id;
      display(privateID);
      formSection.textContent = '';
      const addBookForm = document.createElement('form');
      addBookForm.className = 'add-book-class';
      addBookForm.action = '#';
      addBookForm.innerHTML = `<p>Add some ${privateID} books below</p><input placeholder='Add Title' class='add-book-input'><input placeholder='Add author' class='add-author-input'><button type='submit' class='add-book-btn'>Add</button>`;
      formSection.appendChild(addBookForm);

      const title = document.querySelector('.add-book-input');
      const author = document.querySelector('.add-author-input');

      addBookForm.addEventListener('submit', () => {
        addBook(title.value, author.value, privateID);
        display(privateID);
        title.value = '';
        author.value = '';
      });
    });
  });
};