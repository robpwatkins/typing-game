import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import { useKeyPress } from '../hooks/useKeyPress';
import { fetchWords } from '../fetchWords';
import Level from './Level';
import CurrentWords from './CurrentWords';
import correctKeyStroke from '../sounds/correctKeyStroke2.wav';
import incorrectKeyStroke from '../sounds/incorrectKeyStroke.wav';
import FX from './FX';
import GameOver from './GameOver';
import Difficulty from './Difficulty';

export default function TypingGame({ difficulty }) {
  const [words, setWords] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(25);
  const [gameOver, setGameOver] = useState(false);
  const [fxEnabled, setFxEnabled] = useState(false);
  const [playKeystroke] = useSound(correctKeyStroke);
  const [playMissedKeystroke] = useSound(incorrectKeyStroke);
  
  const buildWordList = useCallback(async () => {
    let minLength, maxLength;
    if (difficulty === 'easy') {
      console.log('easy', true);
      minLength = 3;
      maxLength = 7;
    } else if (difficulty === 'medium') {
      console.log('medium: ', true);
      minLength = 4
      maxLength = 9;
    } else {
      console.log('difficult: ', true)
      minLength = 9
      maxLength = 15;
    }
    let fetchedWords = await fetchWords(minLength, maxLength).then(response => response);
    setWords(fetchedWords);
  }, [setWords]);

  useEffect(() => {
    buildWordList();
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
      (difficulty === 'medium' || difficulty === 'difficult') && setLetterIndex(0);
    }
  })

  return (
    <section className="typing-game">
      <div className="game-info">
        <Level level={level} />
        <Difficulty difficulty={difficulty} />
        <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
      </div>
      {words.length > 0 && 
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