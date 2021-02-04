import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateY(-510px)
  }
  to {
    transform: translateY(715px);
  }
`;

const Scroll = styled.div`
  animation: ${scroll} ${props => props.scrollSpeed}s linear;
`;

export default function CurrentWords({ words, letterIndex, scrollSpeed, setGameOver }) {
  const [levelReset, setLevelReset] = useState(true);
  
  const sectionRef = useRef();
  const divRef = useRef();

  const scrollHeightChecker = () => {
    let scrollHeight = sectionRef.current.scrollHeight;
    let clientHeight = sectionRef.current.clientHeight;
    console.log(scrollHeight, clientHeight);
    return scrollHeight > clientHeight && setGameOver(true);
  }

  useEffect(() => {
    let heightInterval = setInterval(scrollHeightChecker, 100);
    return () => clearInterval(heightInterval);
  });

  useEffect(() => {
    if (words.length === 10) {
      setLevelReset(true);
      setTimeout(() => {
        setLevelReset(false);
      }, 100);
    }
  }, [words]);

  return (
    <section className="words-container" ref={sectionRef}>
      <Scroll 
        // style={{animationDuration: `${scrollSpeed}s`}}
        className={!levelReset 
          ? "current-words scrolling" 
          : "current-words"}
        ref={divRef}
        scrollSpeed={scrollSpeed}
        // translateY={scrollSpeed}
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
      </Scroll>
    </section>
  )
}