export default (title, author, id) => {
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  const newBook = new Book(title, author);

  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  for (let i = 0; i < arr.length; i++) {
    const single = arr[i];
    if (single.index === parseFloat(id)) {
      single.books = single.books.concat(newBook);
      localStorage.setItem('libraryCollection', JSON.stringify(arr));
    }
  }
};