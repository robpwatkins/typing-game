import React, { useState, useEffect } from 'react';

export default function CurrentWords({ wordList, letterIndex, level }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(40)

  useEffect(() => {
    if (level === 1) setIsScrolling(true);
    else if (wordList.length === 10 && letterIndex === 0) {
      setIsScrolling(false);
    }
  }, [level, wordList.length, letterIndex])
  
  useEffect(() => {
    !isScrolling && setTimeout(() => {
      setIsScrolling(true);
    }, 10)
  }, [isScrolling])
  
  return (
    <section 
    style={{animationDuration: `${scrollSpeed - level}s`}}
    className={isScrolling 
      ? "current-words scrolling" 
      : "current-words"}
    >
      {isScrolling && wordList.map((word, index) => {
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