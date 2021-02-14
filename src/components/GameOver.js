import React, { useState, useEffect } from 'react';
import { currentTime } from '../utils/time';
import { Button } from '../components/StartScreen';

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
    <section className="game-over">
      <h3>Game Over!</h3>
      <p>WPM: {((correctCharCount / 5) / durationInMinutes).toFixed(1)}</p>
      <p>Accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(1)}%</p>
      <div className="button-box">
        <Button onClick={() => {
          setGameOver(false)
          setRestart(true);
        }
          }>
            PLAY AGAIN
        </Button>
        <Button onClick={() => setGameStarted(false)}>START SCREEN</Button>
      </div>
    </section>
  )
}