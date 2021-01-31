import React, { useState } from 'react';

export default function StartScreen({ difficulty, setDifficulty, setGameStarted, words }) {
  const [alert, setAlert] = useState(false);

  const handleSpanClick = event => {
    setDifficulty(event.target.innerText);
  }

  const handleStartClick = () => {
    difficulty ? setGameStarted(true) : setAlert(true);
  }

  return (
    <section className="start-screen">
      <h3>Typing Game!</h3>
      {(alert && !difficulty) && <p><em>Please make a selection:</em></p>}
      <span className={difficulty === "easy" ? "active" : null} onClick={handleSpanClick}>
        easy
      </span>
      <span> | </span>
      <span className={difficulty === "medium" ? "active" : null} onClick={handleSpanClick}>
        medium
      </span>
      <span> | </span>
      <span className={difficulty === "difficult" ? "active" : null} onClick={handleSpanClick}>
        difficult
      </span>
      <br/>
      <button onClick={handleStartClick}>START GAME</button>
    </section>
  )
}