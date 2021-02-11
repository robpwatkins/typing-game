export const fetchWords = async (minLength, maxLength) => {
  let response = await fetch(`https://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=${minLength}&maxLength=${maxLength}&limit=10&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
  let json = await response.json();
  return await json.map(wordObj => wordObj.word);
}