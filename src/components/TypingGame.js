import React, { useState, useEffect } from 'react';
import { words } from '../words';
import { createShuffledArr } from '../createShuffledArr';
import useKeyPress from './hooks/useKeyPress';
import Level from './Level';
import CurrentWords from './CurrentWords';

export default function TypingGame() {
  const [wordList, setWordList] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0);
  const [level, setLevel] = useState(1);
  
  useEffect(() => {
    setWordList(createShuffledArr(words, 10));
  }, [])

  useKeyPress(key => {
    let currentWord = wordList[wordList.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (key === currentLetter) {
      let tempLetterIndex = letterIndex + 1;
      if (currentWord.length === tempLetterIndex) {
        let tempWordList = wordList.slice();
        tempWordList.pop();
        if (tempWordList.length === 0) {
          setLevel(level + 1);
          setWordList(createShuffledArr(words, 10));
        } else
        setWordList(tempWordList);
        setLetterIndex(0);
      } else
      setLetterIndex(tempLetterIndex);
    }
  })

  return (
    <section className="typing-game ">
      <Level level={level} />
      <CurrentWords wordList={wordList} letterIndex={letterIndex} level={level} />
    </section>
  )
}