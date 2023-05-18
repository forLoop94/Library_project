import removeBook from "./removeBook.js";

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
        bookContainer.setAttribute('id', id)
        bookContainer.innerHTML = `<div class='book-div flex'><p>${selectedBook.title} by ${selectedBook.author}</p><i class='fa fa-pencil'></i><i id=${selectedBook.index} class='fa fa-trash delete-book'></i><div>`;
        if (j % 2 === 0) {
          bookContainer.style.backgroundColor = '#f6fcfe';
        }
        displaySection.appendChild(bookContainer);

        const removeBook = document.querySelectorAll('.delete-book');
        removeBook.forEach(btn => {
          btn.addEventListener('click', removeBookHandler);
        })
      }
    }
  }
};

const removeBookHandler = (e) => {
  const parent = e.target.parentNode.parentNode;
  const parentId = parent.getAttribute('id');
  removeBook(parentId, e.target.id);
  display(parentId);
}

export default display;