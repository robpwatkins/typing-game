import React, { useState, useEffect, useRef } from 'react';

export default function CurrentWords({ words, letterIndex, scrollSpeed }) {
  const [levelReset, setLevelReset] = useState(true);
  
  const sectionRef = useRef();

  useEffect(() => {
    if (words.length === 10) {
      setLevelReset(true);
      setTimeout(() => {
        setLevelReset(false);
      }, 100);
    }
  }, [words]);

  sectionRef.current && setInterval(() => {
    console.log(sectionRef.current.scrollHeight, sectionRef.current.clientHeight, sectionRef.current.offsetHeight, sectionRef.current.scrollTop);
  }, 1000)

  return (
    <section 
      style={{animationDuration: `${scrollSpeed}s`}}
      className={!levelReset 
        ? "current-words scrolling" 
        : "current-words hidden"}
      ref={sectionRef}
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