export const shuffleWords = (count, wordList) => {
  let randomWords = [];
  for (let i = 0; i < count; i++) {
    randomWords.push(wordList.splice(Math.floor(Math.random() * wordList.length), 1)[0]);
  }
  return randomWords;
}