export default (para, id) => {
  const arr = JSON.parse(localStorage.getItem('libraryCollection'));

  arr.forEach(element => element.index === parseFloat(id) ? para.setAttribute('contenteditable', true) : '');
}

