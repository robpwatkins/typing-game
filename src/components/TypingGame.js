import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { generateArr } from '../generateArr';
import useKeyPress from '../hooks/useKeyPress';
import Level from './Level';
import CurrentWords from './CurrentWords';
import correctKeyStroke from '../sounds/correctKeyStroke2.wav';
import incorrectKeyStroke from '../sounds/incorrectKeyStroke.wav';
import FX from './FX';
import Floor from './Floor';

export default function TypingGame({ words, difficulty }) {
  const [wordList, setWordList] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [fxEnabled, setFxEnabled] = useState(false);
  const [missedKeystrokes, setMissedKeystrokes] = useState(0);
  const [playCorrectKeyStroke] = useSound(correctKeyStroke);
  const [playIncorrectKeyStroke] = useSound(incorrectKeyStroke);
  
  const fetchWords = () => {
    return fetch(`https://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=9&limit=10&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      .then(res => res.json())
      .then(response => response.map(wordObj => wordObj.word));
  }

  const buildWordsArr = async () => {
    let fetchedWords = await fetchWords().then(response => response);
    setWordList(fetchedWords);
  }

  useEffect(() => {
    setWordList(buildWordsArr());
  }, [])

  useKeyPress(key => {
    let currentWord = wordList[wordList.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (key === currentLetter) {
      fxEnabled && playCorrectKeyStroke();
      let tempLetterIndex = letterIndex + 1;
      if (currentWord.length === tempLetterIndex) {
        let tempWordList = wordList.slice();
        tempWordList.pop();
        if (tempWordList.length === 0) {
          setLevel(level + 1);
          setWordList(buildWordsArr());
          // if (words.length < 20) {
          //   buildWordsArr()
          // }
        } else
        setWordList(tempWordList);
        setLetterIndex(0);
      } else
      setLetterIndex(tempLetterIndex);
    } else {
      fxEnabled && playIncorrectKeyStroke();
      (difficulty === 'medium' || difficulty === 'difficult') && setLetterIndex(0);
      setMissedKeystrokes(missedKeystrokes + 1);
    }
  })

  return (
    <section className="typing-game ">
      <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
      <Level level={level} />
      <CurrentWords wordList={wordList} letterIndex={letterIndex} level={level} />
      {difficulty === 'difficult' && <Floor missedKeystrokes={missedKeystrokes} />}
    </section>
  )
}