import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  
  const handleKeyUp = useCallback(event => {
    let currentWord = wordList[wordList.length - 1];
    let currentLetter = currentWord.charAt(letterIndex);
    if (event.key === currentLetter) {
      if (currentWord.length === letterIndex + 1) {
        if (wordList.length === 1) {
          // setWordList(["You Did It!!!"]);
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
    let tempWordArr = [];
    for (let i = 0; i < 10; i++) {  
      tempWordArr.unshift(words[i]);
    }
    setWordList(tempWordArr);
  }, [])
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])
  
  return (
    <section>
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