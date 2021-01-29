import React, { useState } from 'react';

export default function Difficulty({ difficulty }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <span 
      className={isClicked ? "clicked" : null}
      onClick={() => setIsClicked(true)}
    >
      {difficulty}
    </span>
  )
}