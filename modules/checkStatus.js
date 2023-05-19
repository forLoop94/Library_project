export default (currentStatus, selected) => {
  switch(currentStatus) {
    case "completed":
      selected.style.backgroundColor = 'rgb(100, 255, 100)';
      break;
    case "in-progress":
      selected.style.backgroundColor = 'yellow';
      break;
    case "not-read":
      selected.style.backgroundColor = 'rgb(255, 50, 50)';
      break;
    default:
      selected.style.backgroundColor = 'grey';
  }
}