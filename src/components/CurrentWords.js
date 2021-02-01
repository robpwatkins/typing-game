import React, { useState, useEffect, useRef } from 'react';

export default function CurrentWords({ words, letterIndex, level, difficulty }) {
  const [levelReset, setLevelReset] = useState(true);
  const [scrollSpeed, setScrollSpeed] = useState(30);
  
  const spanRef = useRef();

  useEffect(() => {
    if (words.length === 10) {
      setLevelReset(true);
      setTimeout(() => {
        setLevelReset(false);
      }, 100);
    }
  }, [words])

  return (
    <section 
      style={{animationDuration: `${scrollSpeed - level * 2}s`}}
      className={!levelReset 
        ? "current-words scrolling" 
        : "current-words hidden"}
    >
      {words[0] && (!levelReset && words.map((word, index) => {
        return (
          <p key={index}>{
            index < words.length - 1
            ? word
            : (
              words[words.length - 1].split('').map((letter, index) => {
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