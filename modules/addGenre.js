export default (name) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  function Genre(name) {
    this.name = name;
    this.books = [];
  }

  const newGenre = new Genre(name);
  arr.push(newGenre);
  localStorage.setItem('libraryCollection', JSON.stringify(arr));
};
