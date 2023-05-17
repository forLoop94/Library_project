export default (title, author, id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  function Book(title, author) {
    this.title = title;
    this.author = author;
    this.index = arr[id].books.length;
  }

  const newBook = new Book(title, author);

  for (let i = 0; i < arr.length; i++) {
    const single = arr[i];
    if (single.index === parseFloat(id)) {
      single.books = single.books.concat(newBook);
      localStorage.setItem('libraryCollection', JSON.stringify(arr));
    }
  }
};