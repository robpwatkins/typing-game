export const generateArr = (arr, count) => {
  let tempArr = [];
  for (let i = 0; i < count; i++) {
    tempArr.push(arr.splice(i, 1)[0]);
  }
  return tempArr;
}