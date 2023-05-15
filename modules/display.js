const displaySection = document.querySelector('.display');

const display = (id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  displaySection.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const selectedGenre = arr[i];
    if (selectedGenre.index === parseFloat(id)) {
      for (let j = 0; j < selectedGenre.books.length; j++) {
        const selectedBook = selectedGenre.books[j];
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';
        bookContainer.innerHTML = `<div class='book-div flex'><p>${selectedBook.title} by ${selectedBook.author}</p><i class='fa fa-pencil'></i><i class='fa fa-trash'></i><div>`;
        displaySection.appendChild(bookContainer);
      }
    }
  }
};

export default display;