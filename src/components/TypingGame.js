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
  
  const buildWordList = useCallback(async (minLength, maxLength) => {
    let fetchedWords = await fetchWords(minLength, maxLength).then(response => response);
    setWords(fetchedWords);
  }, [setWords]);

  useEffect(() => {
    if (difficulty === 'easy' || difficulty === 'medium') {
      buildWordList(4, 9);
    } else buildWordList(9, 15);
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
        // if (difficulty === 'difficult') setMissedKeystrokes(missedKeystrokes + 15);
    }
  })

  return (
    <section className="typing-game">
      <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
      <Level level={level} />
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