import React, { useState } from 'react';
import PleaseSelect from './PleaseSelect';

export default function StartScreen({ difficulty, setDifficulty, setGameStarted, words }) {
  const [alert, setAlert] = useState(false);

  const handleClick = event => {
    setDifficulty(event.target.innerText);
  }

  const handleStartClick = () => {
    difficulty ? setGameStarted(true) : setAlert(true);
  }

  return (
    <section className="start-screen">
      <h3>Typing Game!</h3>
      {alert && <p><em>Please select a difficulty:</em></p>}
      <span className={difficulty === "easy" ? "active" : null} onClick={handleClick}>
        easy
      </span>
      <span> | </span>
      <span className={difficulty === "medium" ? "active" : null} onClick={handleClick}>
        medium
      </span>
      <span> | </span>
      <span className={difficulty === "difficult" ? "active" : null} onClick={handleClick}>
        difficult
      </span>
      <br/>
      <button onClick={handleStartClick}>START GAME</button>
    </section>
  )
}