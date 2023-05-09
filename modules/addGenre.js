import updateIndex from "./updateIndex.js";

const small = document.querySelector('small');

const addGenre = (name) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  function Genre(name) {
    this.name = name;
    this.books = [];
    this.index = arr.length;
  }

  const newGenre = new Genre(name);

  const repeatedGenreName = arr.filter(obj => obj.name === name);

  if (repeatedGenreName.length !== 0) {
    small.textContent = 'Genre already exists';
    return;
  }

  small.textContent = '';
  arr.push(newGenre);
  updateIndex(arr);
  localStorage.setItem('libraryCollection', JSON.stringify(arr));
};

export { addGenre, small }