import React, { useState, useEffect, useRef } from 'react';

export default function CurrentWords({ setWordsHeight, wordList, letterIndex, level }) {
  const [levelReset, setLevelReset] = useState(true);
  const [scrollSpeed/* , setScrollSpeed */] = useState(30);
  
  const spanRef = useRef();

  useEffect(() => {
    if (wordList.length === 10) {
      setLevelReset(true);
      setTimeout(() => {
        setLevelReset(false);
      }, 100);
    }
  }, [wordList])

  spanRef.current && console.log(spanRef.current.scrollHeight);
  
  return (
    <section 
      style={{animationDuration: `${scrollSpeed - level * 2}s`}}
      className={!levelReset 
        ? "current-words scrolling" 
        : "current-words hidden"}
    >
      {wordList[0] && (!levelReset && wordList.map((word, index) => {
        return (
          <p key={index}>{
            index < wordList.length - 1
            ? word
            : (
              wordList[wordList.length - 1].split('').map((letter, index) => {
                return (
                  <span
                    ref={spanRef}
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
      }))}
    </section>
  )
}