import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  
  const handleKeyUp = useCallback(event => {
    let currentWord = words[wordIndex];
    let currentLetter = currentWord.charAt(letterIndex);
    if (event.key === currentLetter) {
      setLetterIndex(letterIndex + 1);
    }
    console.log(event.key, words[wordIndex].charAt(letterIndex));
  }, [letterIndex, wordIndex])
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])
  
  return (
    <section>
      {words.map((word, index) => {
        return (
          <p key={index}>{word}</p>
        )
      })}
    </section>
  )
}