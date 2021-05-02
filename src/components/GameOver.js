import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { currentTime } from '../utils/time';
import { Button } from '../components/StartScreen';
import Leaderboard from './Leaderboard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  justify-content: space-around;
  align-items: center;
  margin-top: 35%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  .stats {
    font-size: 70%;
  }
  .left {
    margin-right: 5px;
  }
  .right {
    margin-left: 5px;
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
        <div>
          <Button className="left" onClick={handleClick}>
              PLAY AGAIN
          </Button>
          <Button className="right" onClick={() => setGameStarted(false)}>START SCREEN</Button>
        </div>
      </Content>
      <Leaderboard />
    </Container>
  )
}