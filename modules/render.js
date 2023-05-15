import display from "./display.js";
import addBook from "./addBook.js";
import removeGenre from "./removeGenre.js";
import editGenre from "./editGenre.js";
import { small } from "./addGenre.js";
import updateIndex from "./updateIndex.js";

const genreDisplay = document.querySelector('.genre-display');
const formSection = document.querySelector('.form-section');

const render = () => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  genreDisplay.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const eachGenre = arr[i];
    const menuContent = document.createElement('div');
    menuContent.className = 'genre-class';
    menuContent.setAttribute('id', eachGenre.index);
    menuContent.innerHTML = `<div class='flex space-between'><p>${eachGenre.name}</p><i id=${eachGenre.index} class='fa fa-pencil'></i><i id=${eachGenre.index} class='fa fa-trash'></i></div>`;
    genreDisplay.appendChild(menuContent);
  }
  const allGenre = document.querySelectorAll('.genre-class p');
  const genreDelete = document.querySelectorAll('.fa-trash');
  const genreEdit = document.querySelectorAll('.fa-pencil');
  

  genreDelete.forEach(genre => {
    genre.addEventListener('click', removeHandler);
  })

  genreEdit.forEach(genre => {
    genre.addEventListener('click', editHandler);
  })

  allGenre.forEach((genre) => {
    genre.addEventListener('click', (e) => {
      const div = e.target.parentNode;
      const privateID = div.parentNode.id;
      display(privateID);
      formSection.textContent = '';
      const addBookForm = document.createElement('form');
      addBookForm.className = 'add-book-class';
      addBookForm.action = '#';
      addBookForm.innerHTML = `<p>Add some ${e.target.textContent} books below</p><input placeholder='Add Title' class='add-book-input'><input placeholder='Add author' class='add-author-input'><button type='submit' class='add-book-btn'>Add</button>`;
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
}

const removeHandler = (e) => {
  small.textContent = '';
  removeGenre(e.target.id);
  render();
}

const editHandler = (e) => {
  small.textContent = '';
  const bookTitle = e.target.previousSibling;
  editGenre(bookTitle, e.target.id);
  const parentId = e.target.id;
  e.target.style.display = 'none';
  bookTitle.focus();

  bookTitle.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const arr = JSON.parse(localStorage.getItem('libraryCollection'));

      arr[parentId].name = bookTitle.textContent;

      updateIndex(arr);
      localStorage.setItem('libraryCollection', JSON.stringify(arr));
      render();
    }
  })
}

export { render, removeHandler };