import React, { useState } from 'react';

export default function Difficulty({ diff, setDiff, text }) {
  return (
    <span 
      className={diff === text ? "clicked" : null}
      onClick={() => setDiff(text)}
    >
      {text}
    </span>
  )
}