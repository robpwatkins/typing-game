import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';
import { createShuffledArr } from '../createShuffledArr';
import useKeyPress from './hooks/useKeyPress';
import Level from './Level';
import CurrentWords from './CurrentWords';

export default function TypingGame() {
  const [letterIndex, setLetterIndex] = useState(0);
  // const [wordList, setWordList] = useState([]);
  const [level, setLevel] = useState(1);
  
  useKeyPress(key => {
    console.log(key);
  })

  const handleKeyUp = useCallback(event => {
    let currentWord = wordList[wordList.length - 1];
    // let currentLetter = currentWord.charAt(letterIndex);
    if (event.key === currentWord.charAt(letterIndex)) {
      let tempLetterIndex = letterIndex + 1;
      setLetterIndex(letterIndex + 1);
      if (currentWord.length === tempLetterIndex) {
        let tempWordList = wordList.slice();
        tempWordList.pop();
        setWordList(tempWordList);
        // console.log(tempWordList.length, wordList.length);
        setLetterIndex(0);
        if (tempWordList.length === 0) {
          setWordList(createShuffledArr(10, words))
          setLetterIndex(0);
          setLevel(level + 1);
        }
      }
      // if (currentWord.length === letterIndex + 1) {
      //   if (wordList.length === 1) {
      //     setWordList(createShuffledArr(10, words));
      //     setLetterIndex(0);
      //     setLevel(level + 1);
      //   } else {
      //     let tempWordList = wordList.slice();
      //     tempWordList.pop();
      //     setWordList(tempWordList);
      //     setLetterIndex(0);
      //   }
      // } else
      // setLetterIndex(letterIndex + 1);
    }
  }, [letterIndex, wordList, level])
  
  useEffect(() => {
    setWordList(createShuffledArr(10, words));
  }, [])
  
  // useEffect(() => {
  //   window.addEventListener('keyup', handleKeyUp);
  //   return () => window.removeEventListener('keyup', handleKeyUp)
  // }, [handleKeyUp])
  
  return (
    <section className="typing-game ">
      <Level level={level} />
      <CurrentWords wordList={wordList} letterIndex={letterIndex} level={level} />
    </section>
  )
}