import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import { fetchWords } from '../utils/fetchWords';
import { currentTime } from '../utils/time';
import { useKeyPress } from '../hooks/useKeyPress';
import Level from './Level';
import CurrentWords from './CurrentWords';
import correctKeyStroke from '../sounds/correctKeyStroke2.wav';
import incorrectKeyStroke from '../sounds/incorrectKeyStroke.wav';
import FX from './FX';
import GameOver from './GameOver';

export default function TypingGame({ difficulty, setGameStarted }) {
  const [words, setWords] = useState([]);
  const [startTime, setStartTime] = useState();
  const [letterIndex, setLetterIndex] = useState(0);
  const [typedCharCount, setTypedCharCount] = useState(0);
  const [correctCharCount, setCorrectCharCount] = useState(0);
  const [level, setLevel] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(25);
  const [gameOver, setGameOver] = useState(false);
  const [fxEnabled, setFxEnabled] = useState(false);
  const [playKeystroke] = useSound(correctKeyStroke);
  const [playMissedKeystroke] = useSound(incorrectKeyStroke);
  
  const buildWordList = useCallback(async () => {
    let minLength, maxLength;
    if (difficulty === 'easy') {
      minLength = 3;
      maxLength = 7;
    } else if (difficulty === 'medium') {
      minLength = 4
      maxLength = 9;
    } else {
      minLength = 9
      maxLength = 15;
    }
    let fetchedWords = await fetchWords(minLength, maxLength).then(response => response);
    setWords(fetchedWords);
  }, [difficulty, setWords]);

  useEffect(() => {
    !gameOver && buildWordList();
  }, [buildWordList, gameOver]);

  useKeyPress(key => {
    if (!gameOver) {
      !startTime && setStartTime(currentTime());
      setTypedCharCount(typedCharCount + 1);
      let currentWord = words[words.length - 1];
      let currentLetter = currentWord.charAt(letterIndex);
      if (key === currentLetter) {
        fxEnabled && playKeystroke();
        setCorrectCharCount(correctCharCount + 1);
        let tempLetterIndex = letterIndex + 1;
        if (currentWord.length === tempLetterIndex) {
          let tempWordList = words.slice();
          tempWordList.pop();
          if (tempWordList.length === 0) {
            setLevel(level + 1);
            setWords(buildWordList());
            setScrollSpeed(scrollSpeed * .9);
          } else
          setWords(tempWordList);
          setLetterIndex(0);
        } else
        setLetterIndex(tempLetterIndex);
      } else {
        fxEnabled && playMissedKeystroke();
        (difficulty === 'medium' || difficulty === 'difficult') && setLetterIndex(0);
      }
    }
  })

  return (
    <section className="typing-game">
      <div className="game-info">
        <Level level={level} />
        <h6>{difficulty}</h6>
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
      {gameOver && 
        <GameOver 
          startTime={startTime} 
          typedCharCount={typedCharCount}
          correctCharCount={correctCharCount}
          setGameOver={setGameOver}
          setGameStarted={setGameStarted}
        />}
    </section>
  )
}