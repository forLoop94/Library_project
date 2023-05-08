import updateIndex from "./updateIndex.js";
export default (id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  let remains = arr.filter((obj) => {
    return obj.index !== parseFloat(id);
  });

  updateIndex(remains);

  localStorage.setItem('libraryCollection', JSON.stringify(remains));
}