import React, { useState } from 'react';
import Difficulty from './Difficulty';


export default function StartScreen({ setGameStarted, setDifficulty }) {

  const handleClick = event => {
    setDifficulty(event.target.innerText);
  }

  return (
    <section className="start-screen">
      <h3>Typing Game!</h3>
      <Difficulty difficulty="easy" />
      <span> | </span>
      <Difficulty difficulty="medium" />
      <span> | </span>
      <Difficulty difficulty="hard" />
      <br/>
      <button onClick={() => setGameStarted(true)}>START GAME</button>
    </section>
  )
}