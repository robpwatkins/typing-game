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
`;

const Content = styled.div`
  .stats {
    font-size: 70%;
  }
  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 5%;
  }
`;

export default function GameOver({
  startTime, 
  typedCharCount, 
  correctCharCount, 
  setGameOver, 
  setRestart, 
  setGameStarted,
  currentPlayer,
  level
}) {
  const [endTime, setEndTime] = useState();
  
  useEffect(() => {
    setEndTime(currentTime());
  }, [setEndTime])

  const updateLevel = async () => {
    fetch('/api/updatePlayer', {
      method: 'PATCH',
      body: JSON.stringify({
        currentPlayer, level
      })
    })
  }

  useEffect(() => {
    updateLevel();
  })

  const handleClick = () => {
    setGameOver(false)
    setRestart(true);
  }

  const durationInMinutes = (endTime - startTime) / 60000.0;

  console.log(currentPlayer.data);
  return (
    <Container>
      <Content>
        <h3><em>Game Over!</em></h3>
        <p className="stats">wpm: {((correctCharCount / 5) / durationInMinutes).toFixed(1)}</p>
        <p className="stats">accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(1)}%</p>
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