import { useState, useEffect, useCallback } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

function App() {
  const [words, setWords] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const fetchWords = () => {
    return fetch(`https://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=25000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=9&limit=250&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      .then(res => res.json())
      .then(response => response.map(wordObj => wordObj.word));
  }

  const buildWordsArr = useCallback(async () => {
    let tempWords = [];
    let fetchedWords = await fetchWords().then(response => response);
    while (tempWords.length < 250) {
      tempWords = [...tempWords, ...fetchedWords];
    }
    console.log(tempWords);
    setWords(tempWords);
  }, [])

  useEffect(() => {
    buildWordsArr();
  }, [buildWordsArr])

  return (
    <div className="App">
      { !gameStarted 
          ? <StartScreen
            setGameStarted={setGameStarted}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            words={words}
          />
          : <TypingGame words={words} difficulty={difficulty} />}
    </div>
  );
}

export default App;
