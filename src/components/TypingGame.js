import React, { useState, useEffect, useRef } from 'react';
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
  const [fxEnabled, setFxEnabled] = useState(false);
  const [missedKeystrokes, setMissedKeystrokes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playCorrectKeyStroke] = useSound(correctKeyStroke);
  const [playIncorrectKeyStroke] = useSound(incorrectKeyStroke);
  
  const sectionRef = useRef();
  
  setInterval(() => {
    let scrollHeight = sectionRef.current.scrollHeight;
    let clientHeight = sectionRef.current.clientHeight;
    return scrollHeight !== clientHeight && setGameOver(true);
  }, 1000);

  const fetchWords = () => {
    return fetch(`https://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=10000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=9&limit=10&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      .then(res => res.json())
      .then(response => response.map(wordObj => wordObj.word));
  }

  const buildWordList = async () => {
    let fetchedWords = await fetchWords().then(response => response);
    setWords(fetchedWords);
  }

  useEffect(() => {
    setWords(buildWordList());
  }, [])

  useKeyPress(key => {
    let currentWord = words[words.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (key === currentLetter) {
      fxEnabled && playCorrectKeyStroke();
      let tempLetterIndex = letterIndex + 1;
      if (currentWord.length === tempLetterIndex) {
        let tempWordList = words.slice();
        tempWordList.pop();
        if (tempWordList.length === 0) {
          setLevel(level + 1);
          setWords(buildWordList());
        } else
        setWords(tempWordList);
        setLetterIndex(0);
      } else
      setLetterIndex(tempLetterIndex);
    } else {
      fxEnabled && playIncorrectKeyStroke();
      (difficulty === 'medium' || difficulty === 'difficult') && setLetterIndex(0);
      difficulty === 'difficult' && console.log('heyoo');
      setMissedKeystrokes(missedKeystrokes + 1);
    }
  })

  return (
    <section className="typing-game">
      <div className={gameOver ? "overlay visible" : "overlay"} ref={sectionRef}>
        <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
        <Level level={level} />
        <CurrentWords words={words} letterIndex={letterIndex} level={level} difficulty={difficulty} />
      </div>
      {gameOver && <GameOver />}
    </section>
  )
}