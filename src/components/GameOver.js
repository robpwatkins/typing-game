import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { currentTime } from '../utils/time';
import { Button } from '../components/StartScreen';

const P = styled.p`
  font-size: 75%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
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
    <section>
      <h3>Game Over!</h3>
      <P>WPM: {((correctCharCount / 5) / durationInMinutes).toFixed(1)}</P>
      <P>Accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(1)}%</P>
      <Div>
        <Button onClick={() => {
          setGameOver(false)
          setRestart(true);
        }
          }>
            PLAY AGAIN
        </Button>
        <Button onClick={() => setGameStarted(false)}>START SCREEN</Button>
      </Div>
    </section>
  )
}