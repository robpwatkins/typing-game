import React from 'react';
import { currentTime } from '../utils/time';

export default function GameOver({ startTime, typedCharCount, correctCharCount, setGameOver, setGameStarted }) {

  const durationInMinutes = (currentTime() - startTime) / 60000.0;

  return (
    <section className="game-over">
      <h3>Game Over!</h3>
      <p>WPM: {((correctCharCount / 5) / durationInMinutes).toFixed(2)}</p>
      <p>Accuracy: {((correctCharCount * 100) / typedCharCount).toFixed(2)}%</p>
      <div className="button-box">
        <button onClick={() => setGameOver(false)}>PLAY AGAIN</button>
        <button onClick={() => setGameStarted(false)}>START SCREEN</button>
      </div>
    </section>
  )
}