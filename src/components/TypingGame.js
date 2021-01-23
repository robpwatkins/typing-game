import React, { useState, useEffect } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [wordIndex, setWordIndex] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);
  
  const handleKeyUp = typedLetter => {
    console.log(typedLetter);
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