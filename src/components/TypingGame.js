import React, { useState, useEffect } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  
  const handleKeyUp = typedLetter => {
    let currentWord = words[wordIndex];
    let currentLetter = currentWord.charAt(letterIndex);
    if (typedLetter === currentLetter) {
      console.log(currentWord.length)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', event => handleKeyUp(event.key));
  })
  
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