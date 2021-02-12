import React, { useState, useRef, useEffect } from 'react';

export default function({ difficulty, setDifficulty, setGameStarted }) {
  const [parent, setParent] = useState();

  const divRef = useRef();

  useEffect(() => {
    setParent(divRef.current.parentNode.className);
  })

  const handleSpanClick = event => {
    setDifficulty(event.target.innerText);
  }

  return (
    <div className="selection" ref={divRef}>
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
      <button onClick={() => setGameStarted(true)}>
        {parent === "start-screen" ? "START GAME" : "TRY AGAIN"}
      </button>
    </div>
  )
}