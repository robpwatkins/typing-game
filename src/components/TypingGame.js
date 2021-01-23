import React, { useState, useEffect } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [shortList, setShortList] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [currentTypedLetter, setCurrentTypedLetter] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    let tempList = [];
    for (let i = 0; i <=10; i++) {
      tempList.unshift(words[i]);
    }
    setShortList(tempList);
    setCurrentWord(tempList[tempList.length - 1].split(''))
    window.addEventListener('keyup', event => {
      setCurrentTypedLetter(event.key);
    })
  }, [])

  useEffect(() => {
    if (currentTypedLetter === currentWord[currentIndex]) {
      console.log(currentWord[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentTypedLetter])

  return (
    <section>
      {shortList.map((word, index) => {
        return (
          <p key={index}>{
            index < shortList.length - 1 
              ? word
              : currentWord.map((letter, index) => {
                return (
                  <span key={index}>{letter}</span>
                )
              })
            }</p>
        )
      })}
    </section>
  )
}