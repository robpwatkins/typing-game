import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  
  const handleKeyUp = useCallback(event => {
    let currentWord = words[wordIndex];
    let currentLetter = currentWord.charAt(letterIndex);
    if (event.key === currentLetter) {
      if (currentWord.length === letterIndex + 1) {
        setWordIndex(wordIndex + 1);
        setLetterIndex(0);
      } else
      setLetterIndex(letterIndex + 1);
    }
  }, [letterIndex, wordIndex])
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])
  
  console.log(words[wordIndex].charAt(letterIndex));
  return (
    <section>
      {words.map((word, index) => {
        if (index > wordIndex) {
          return (
            <p key={index}>{word}</p>
          )
        } else if (index === wordIndex) {
          return (
            word.split('').map((letter, idx) => {
              return (
                <span 
                  key={idx}
                  style={idx < letterIndex ? {fontWeight: "bold"} : null}
                >
                  {letter}
                </span>
              )
            })
          )
        }
      })}
    </section>
  )
}