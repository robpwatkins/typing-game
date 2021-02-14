import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
`;

const scroll = keyframes`
  from {
    transform: none;
  }
  to {
    transform: translateY(175vh);
  }
`;

const Div = styled.div`
  margin-top: -${props => props.marginTopOffset};
  animation: ${scroll} ${props => props.scrollSpeed}s linear;
  > p {
    margin: 15px 0 0 0;
  }
`;

export default function CurrentWords({ words, setWords, letterIndex, scrollSpeed, setGameOver }) {
  const [marginTopOffset, setMarginTopOffset] = useState('100vh');

  const containerRef = useRef();
  const wordsRef = useRef();  
  
  useEffect(() => {
    setMarginTopOffset(`${wordsRef.current.scrollHeight}px`);
    const scrollHeightChecker = () => {
      let scrollHeight = containerRef.current.scrollHeight;
      let clientHeight = containerRef.current.clientHeight;
      if (scrollHeight > clientHeight + 5) {
        setGameOver(true);
        setWords([]);
      }
    }
    let heightInterval = setInterval(scrollHeightChecker, 100);
    return () => clearInterval(heightInterval);
  }, [setGameOver, setWords]);

  return (
    <Section ref={containerRef}>
      <Div scrollSpeed={scrollSpeed} marginTopOffset={marginTopOffset} ref={wordsRef}>
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
      </Div>
    </Section>
  )
}