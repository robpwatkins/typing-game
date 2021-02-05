import React, { useState, useEffect, useRef, useCallback } from 'react';
import useSound from 'use-sound';
import useKeyPress from '../hooks/useKeyPress';
import Level from './Level';
import CurrentWords from './CurrentWords';
import correctKeyStroke from '../sounds/correctKeyStroke2.wav';
import incorrectKeyStroke from '../sounds/incorrectKeyStroke.wav';
import FX from './FX';
import GameOver from './GameOver';

export default function TypingGame({ difficulty }) {
  const [words, setWords] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(25);
  const [gameOver, setGameOver] = useState(false);
  const [fxEnabled, setFxEnabled] = useState(false);
  const [missedKeystrokes, setMissedKeystrokes] = useState(0);
  const [playKeystroke] = useSound(correctKeyStroke);
  const [playMissedKeystroke] = useSound(incorrectKeyStroke);
  
  const sectionRef = useRef();
  
  const fetchWords = () => {
    return fetch(`https://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=9&limit=10&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
    .then(res => res.json())
    .then(response => response.map(wordObj => wordObj.word));
  }
  
  const buildWordList = useCallback(async () => {
    let fetchedWords = await fetchWords().then(response => response);
    setWords(fetchedWords);
  }, [setWords])

  useEffect(() => {
    setWords(buildWordList());
  }, [buildWordList]);

  useKeyPress(key => {
    let currentWord = words[words.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (key === currentLetter) {
      fxEnabled && playKeystroke();
      let tempLetterIndex = letterIndex + 1;
      if (currentWord.length === tempLetterIndex) {
        let tempWordList = words.slice();
        tempWordList.pop();
        if (tempWordList.length === 0) {
          setLevel(level + 1);
          setWords(buildWordList());
          setScrollSpeed(scrollSpeed - 2);
        } else
        setWords(tempWordList);
        setLetterIndex(0);
      } else
      setLetterIndex(tempLetterIndex);
    } else {
      fxEnabled && playMissedKeystroke();
      if (difficulty === 'medium' || difficulty === 'difficult') {
        setLetterIndex(0);
        // if (difficulty === 'difficult') setScrollSpeed(scrollSpeed - 1);
      }
    }
  })

  return (
    <section className="typing-game" ref={sectionRef}>
      <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
      <Level level={level} />
      {words[0] && 
        <CurrentWords 
          words={words} 
          setWords={setWords} 
          letterIndex={letterIndex} 
          scrollSpeed={scrollSpeed} 
          setGameOver={setGameOver}
        />}
      {gameOver && <GameOver />}
    </section>
  )
}