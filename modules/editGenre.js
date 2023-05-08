import updateIndex from "./updateIndex.js";

export default (para, id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].index === parseFloat(id)) {
      para.setAttribute('contenteditable', true);
    }
    updateIndex(arr);

    localStorage.setItem('libraryCollection', JSON.stringify(arr));  
  }
}

