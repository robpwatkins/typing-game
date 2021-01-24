import React from 'react';
import styled, { keyframes } from 'styled-components';

// const scroll = keyframes`
//   0% { transform: translateY(0px); }
//   100% { transform: translateY(1400px) }
// `;

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   top: -690px;
//   justify-content: flex-start;
//   animation: ${scroll} 35s linear;  
// `;

export default function CurrentWords({ wordList, letterIndex }) {

  return (
    <section className={!(wordList.length === 1 && letterIndex === wordList[0].length - 1) ? "current-words scrolling" : "current-words"}>
      {wordList.map((word, index) => {
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