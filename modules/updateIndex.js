export default (arr) => {
  return arr.map((obj, key) => {
    obj.index = key;
  })
}