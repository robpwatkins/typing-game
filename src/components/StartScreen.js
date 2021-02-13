import React from 'react';

export default function StartScreen({ difficulty, setDifficulty, setGameStarted }) {

  const handleSpanClick = event => {
    setDifficulty(event.target.innerText);
  }

  const handleStartClick = () => {
    difficulty && setGameStarted(true);
  }

  return (
    <section className="start-screen">
      <h3>Speed Typer</h3>
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