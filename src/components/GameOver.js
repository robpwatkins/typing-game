import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { currentTime } from '../utils/time';
import { Button } from '../components/StartScreen';

const Container = styled.div`
  > p {
    font-size: 75%;
  }
  > div {
      display: flex;
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

  const durationInMinutes = (endTime - startTime) / 60000.0;

  return (
    <Container>
      <h3>Game Over!</h3>
      <p>WPM: {((correctCharCount / 5) / durationInMinutes).toFixed(1)}</p>
      <p>Accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(1)}%</p>
      <div>
        <Button onClick={() => {
          setGameOver(false)
          setRestart(true);
        }
          }>
            PLAY AGAIN
        </Button>
        <Button onClick={() => setGameStarted(false)}>START SCREEN</Button>
      </div>
    </Container>
  )
}