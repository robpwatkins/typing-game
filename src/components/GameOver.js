import React from 'react';
import { currentTime } from '../utils/time';

export default function GameOver({ wordCount, startTime, wpm }) {

  const durationInMinutes = (currentTime() - startTime) / 60000.0;

  return (
    <section className="game-over">
      <h3>Game Over!</h3>
      <h3>WPM: {(wordCount / durationInMinutes).toFixed(2)}</h3>
    </section>
  )
}