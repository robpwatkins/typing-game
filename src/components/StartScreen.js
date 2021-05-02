import React from 'react';
import styled from 'styled-components';
import Leaderboard from './Leaderboard';
import Selection from './Selection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 10%; */
`;

export const Button = styled.button`
  padding: .5%;
  font-size: 45%;
  font-family: 'Courier New', Courier, monospace;
`;

export default function StartScreen({ difficulty, setDifficulty, setGameStarted }) {

  const handleClick = () => {
    difficulty && setGameStarted(true);
  }

  return (
    <Container>
      <div>
        <h3><em>Speed Typer</em></h3>
        <Selection difficulty={difficulty} setDifficulty={setDifficulty} />
        <br/>
        <Button onClick={handleClick}>START GAME</Button>
      </div>
      <Leaderboard />
    </Container>
  )
}