export default (title, author, id) => {
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  const newBook = new Book(title, author);

  for (let i = 0; i < arr.length; i++) {
    const single = arr[i];
    if (single.name === id) {
      single.books = single.books.concat(newBook);
      localStorage.setItem('libraryCollection', JSON.stringify(arr));
    }
  }
};