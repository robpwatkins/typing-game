import React, { useState, useEffect } from 'react';

export default function CurrentWords({ wordList, letterIndex, level }) {
  const [levelReset, setLevelReset] = useState(true);
  const [scrollSpeed/* , setScrollSpeed */] = useState(40);

  useEffect(() => {
    setLevelReset(true);
    setTimeout(() => {
      setLevelReset(false);
    }, 100);
  }, [level])
  
  return (
    <section 
    style={{animationDuration: `${scrollSpeed - level * 2}s`}}
    className={!levelReset 
      ? "current-words scrolling" 
      : "current-words"}
    >
      {!levelReset && wordList.map((word, index) => {
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