const genreForm = document.querySelector('[data-genre-form]');
const genreInput = document.querySelector('.genre-input');

const genreDisplay = document.querySelector('.genre-display');

const formSection = document.querySelector('.form-section');

const displaySection = document.querySelector('.display');

let libraryCollection = JSON.parse(localStorage.getItem('libraryCollection'));
if (!libraryCollection) localStorage.setItem('libraryCollection', '[]');

const addGenre = (name) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  function Genre(name) {
    this.name = name;
    this.books = [];
  }

  const newGenre = new Genre(name);
  arr.push(newGenre)
  localStorage.setItem('libraryCollection', JSON.stringify(arr));
}

genreForm.addEventListener('submit', () => {
  addGenre(genreInput.value);
  render();
})

const render = () => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  genreDisplay.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const eachGenre = arr[i];
    const menuContent = document.createElement('div');
    menuContent.className = 'genre-class';
    menuContent.setAttribute('id', eachGenre.name)
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
      const author= document.querySelector('.add-author-input');

      addBookForm.addEventListener('submit', () => {
        addBook(title.value, author.value, privateID);
        display(privateID);
        title.value = '';
        author.value = '';
      })
    })
  })
}