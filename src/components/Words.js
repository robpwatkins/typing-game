import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateY(-75vh);
  }
  to {
    transform: translateY(100vh);
  }
`;

const Scroll = styled.div`  
  animation: ${scroll} ${props => props.scrollSpeed}s linear;
  > p {
    margin: 15px 0 0 0;
  }
`;

export default function CurrentWords({ words, setWords, letterIndex, scrollSpeed, setGameOver }) {  
  const containerRef = useRef();
  const wordsRef = useRef();

  const scrollHeightChecker = () => {
    let scrollHeight = containerRef.current.scrollHeight;
    let clientHeight = containerRef.current.clientHeight;
    if (scrollHeight > clientHeight + 5) {
      setGameOver(true);
      setWords([]);
    }
  }

  useEffect(() => {
    let heightInterval = setInterval(scrollHeightChecker, 100);
    return () => clearInterval(heightInterval);
  });

  return (
    <section className="words-container" ref={containerRef}>
      <Scroll scrollSpeed={scrollSpeed} ref={wordsRef} height={wordsRef.current && wordsRef.current.scrollHeight}>
        {words.map((word, index) => {
          return (
            <p key={index}>{
              index < words.length - 1
              ? word
              : (
                words[words.length - 1].split('').map((letter, index) => {
                  return (
                    <span key={index} style={index < letterIndex ? {fontWeight: "bold"} : null}>
                      {letter}
                    </span>
                  )
                })
              )
            }</p>
          )
        })}
      </Scroll>
    </section>
  )
}