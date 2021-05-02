import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { currentTime } from '../utils/time';
import { Button } from '../components/StartScreen';
import Leaderboard from './Leaderboard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  justify-content: space-evenly;
  margin-top: 10%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .stats {
    font-size: 70%;
  }
  .buttons {
      display: flex;
      width: 80%;
      justify-content: space-evenly;
      margin-top: 3%;
  }
`;


export default function GameOver({
  startTime, 
  typedCharCount, 
  correctCharCount, 
  setGameOver, 
  setRestart, 
  setGameStarted 
}) {
  const [endTime, setEndTime] = useState();
  
  useEffect(() => {
    setEndTime(currentTime());
  }, [setEndTime])

  const handleClick = () => {
    setGameOver(false)
    setRestart(true);
  }

  const durationInMinutes = (endTime - startTime) / 60000.0;

  return (
    <Container>
      <Content>
        <h3><em>Game Over!</em></h3>
        <div>
          <span className="stats">wpm: {((correctCharCount / 5) / durationInMinutes).toFixed(1)}</span>
          <span className="stats"> | </span>
          <span className="stats">accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(1)}%</span>
        </div>
        <div className="buttons">
          <Button onClick={handleClick}>
              PLAY AGAIN
          </Button>
          <Button onClick={() => setGameStarted(false)}>START SCREEN</Button>
        </div>
      </Content>
      <Leaderboard />
    </Container>
  )
}