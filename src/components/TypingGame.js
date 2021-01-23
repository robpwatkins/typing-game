import React, { useState, useEffect } from 'react';
import { words } from '../words';

export default function TypingGame() {
  const [shortList, setShortList] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  


  useEffect(() => {
    let tempList = [];
    for (let i = 0; i <=10; i++) {
      tempList.unshift(words[i]);
    }
    setShortList(tempList);
    setCurrentWord(tempList[tempList.length - 1].split(''))
    document.addEventListener('keyup', event => {
      console.log(event.key);
    })
    console.log(currentWord);
  }, [setShortList])
  
  return (
    <section>
      {shortList.map((word, index) => {
        return (
          <h3 key={index}>{
            index < shortList.length - 1 
              ? word
              : currentWord
            }</h3>
        )
      })}
    </section>
  )
}