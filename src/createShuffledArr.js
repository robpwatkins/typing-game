export const createShuffledArr = (arr, count) => {
  let randomArr = [];
  for (let i = 0; i < count; i++) {
    randomArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  }
  return randomArr;
}