import React from 'react';

export default function StartScreen({ handleClick }) {
  return (
    <section className="start-screen">
      <h3>Typing Game!</h3>
      <span>easy</span>
      <span> | </span>
      <span>medium</span>
      <span> | </span>
      <span>difficult</span>
      <br/>
      <button onClick={handleClick}>START GAME</button>
    </section>
  )
}