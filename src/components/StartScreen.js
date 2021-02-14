import React from 'react';

export default function StartScreen({ handleClick }) {
  return (
    <section className="start-screen">
      <h3>Typing Game</h3>
      <button onClick={handleClick}>START GAME</button>
    </section>
  )
}
