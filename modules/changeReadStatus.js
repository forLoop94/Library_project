import { display } from "./display.js";

export default (e) => {
  const parentId = e.target.parentNode.id;
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));
  arr[parentId].books[e.target.id].status = e.target.value;

  localStorage.setItem('libraryCollection', JSON.stringify(arr));

  display(parentId);
}