import React from 'react';
import styled from 'styled-components';
import Leaderboard from './Leaderboard';

const Span = styled.span`
  cursor: default;
  font-size: 70%;
  font-weight: ${props => props.difficulty === props.innerText ? "bold" : null};
  &:hover {
    cursor: default;
    font-weight: bold;
  }
  &:nth-last-child(even) {
    font-weight: normal;
  }
`;

export const Button = styled.button`
  padding: .5%;
  font-size: 45%;
  font-family: 'Courier New', Courier, monospace;
`;

export default function StartScreen({ difficulty, setDifficulty, setGameStarted }) {

  const handleSpanClick = event => {
    setDifficulty(event.target.innerText);
  }

  const handleStartClick = () => {
    difficulty && setGameStarted(true);
  }

  return (
    <section>
      <Leaderboard />
      <h3><em>Speed Typer</em></h3>
      <Span difficulty={difficulty} innerText={"easy"} onClick={handleSpanClick}>
        easy
      </Span>
      <Span> | </Span>
      <Span difficulty={difficulty} innerText={"medium"} onClick={handleSpanClick}>
        medium
      </Span>
      <Span> | </Span>
      <Span difficulty={difficulty} innerText={"difficult"} onClick={handleSpanClick}>
        difficult
      </Span>
      <br/>
      <Button onClick={handleStartClick}>START GAME</Button>
    </section>
  )
}