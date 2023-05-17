import updateIndex from './updateIndex.js';

export default (id1, id2) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  
  const remainder = arr[id1].books.filter(obj => obj.index !== parseFloat(id2));

  updateIndex(remainder);
  arr[id1].books = remainder;

  localStorage.setItem('libraryCollection', JSON.stringify(arr));
}