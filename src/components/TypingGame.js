import React, { useState, useEffect } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [shortList, setShortList] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('');
  
  useEffect(() => {
    let tempList = [];
    for (let i = 0; i <=10; i++) {
      tempList.unshift(words[i]);
    }
    setShortList(tempList);
    setCurrentWord(tempList[tempList.length - 1].split(''))
    window.addEventListener('keyup', event => {
      setCurrentLetter(event.key);
    })
  }, [])

  useEffect(() => {
    console.log(currentLetter);
  }, [currentLetter])

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