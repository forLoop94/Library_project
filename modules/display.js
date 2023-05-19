import removeBook from "./removeBook.js";
import { quote } from "./home.js";
import { formSection } from "./render.js";
import { contactDetails } from "./contact.js";
import changeReadStatus from "./changeReadStatus.js";
import checkStatus from "./checkStatus.js";

const displaySection = document.querySelector('.display');

const display = (id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  quote.classList.toggle('inactive', true);
  displaySection.classList.toggle('inactive', false);
  formSection.classList.toggle('inactive', false);
  contactDetails.classList.toggle('inactive', true);
  displaySection.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const selectedGenre = arr[i];
    if (selectedGenre.index === parseFloat(id)) {
      for (let j = 0; j < selectedGenre.books.length; j++) {
        const selectedBook = selectedGenre.books[j];

        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';
        bookContainer.classList.add('flex');
        bookContainer.setAttribute('id', id)
        bookContainer.innerHTML = `<select name="status" class="status" id=${selectedBook.index}>
          <option value=${selectedBook.status}>${selectedBook.status}</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In progress</option>
          <option value="not-read">Not-read</option>
        </select>
        <div class='book-div flex'>
          <p>${selectedBook.title} by ${selectedBook.author}</p>
          <i class='fa fa-pencil'></i>
          <i id=${selectedBook.index} class='fa fa-trash delete-book'></i>
        <div>`;

        if (j % 2 === 0) {
          bookContainer.style.backgroundColor = '#f6fcfe';
        }

        const status = bookContainer.children[0];

        checkStatus(status.value, status);
        displaySection.appendChild(bookContainer);

        const readStatus = document.querySelectorAll('.status');

        readStatus.forEach((book) => {
          book.addEventListener('change', changeReadStatus);
        })

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

export { display, displaySection };