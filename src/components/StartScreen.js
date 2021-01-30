import React from 'react';

export default function StartScreen({ difficulty, setDifficulty, setGameStarted }) {

  const handleClick = event => {
    setDifficulty(event.target.innerText);
  }

  return (
    <section className="start-screen">
      <h3>Typing Game!</h3>
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
      <button onClick={() => setGameStarted(true)}>START GAME</button>
    </section>
  )
}