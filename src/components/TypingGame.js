import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';
import { createShuffledArr } from '../createShuffledArr';
import Level from './Level';

export default function TypingGame() {
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [level, setLevel] = useState(1);
  
  const handleKeyUp = useCallback(event => {
    let currentWord = wordList[wordList.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (event.key === currentLetter) {
      if (currentWord.length === letterIndex + 1) {
        if (wordList.length === 1) {
          setWordList(createShuffledArr(10, words));
          setLetterIndex(0);
          setLevel(level + 1);
        } else {
          let tempWordList = wordList.slice();
          tempWordList.pop();
          setWordList(tempWordList);
          setLetterIndex(0);
        }
      } else
      setLetterIndex(letterIndex + 1);
    }
  }, [letterIndex, wordList])
  
  useEffect(() => {
    setWordList(createShuffledArr(10, words));
  }, [])
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])
  
  return (
    <section className="typing-game ">
      <Level level={level} />
      {wordList.map((word, index) => {
        return (
          <p key={index}>{
            index < wordList.length - 1
            ? word
            : (
              wordList[wordList.length - 1].split('').map((letter, index) => {
                return (
                  <span
                    key={index}
                    style={index < letterIndex ? {fontWeight: "bold"} : null}
                  >
                    {letter}
                  </span>
                )
              })
            )
          }</p>
        )
      })}
    </section>
  )
}