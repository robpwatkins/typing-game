import React from 'react';

export default function StartScreen({ handleClick }) {
  return (
    <>
      <h3>Typing Game!</h3>
      <button onClick={handleClick}>START GAME</button>
    </>
  )
}