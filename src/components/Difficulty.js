import React from 'react';

export default function Difficulty({ difficulty }) {
  return (
    <section className="difficulty">
      <h6>{difficulty}</h6>
      {/* {difficulty === 'easy' && (
        <>
          <p>missed keystrokes ok</p>
          <p>4-7 letters</p>
        </>
      )}
      {difficulty === 'medium' && (
        <>
          <p>missed keystrokes narp</p>
          <p>7-12 letters</p>
        </>
      )}
      {difficulty === 'difficult' && (
        <>
          <p>missed keystrokes narp</p>
          <p>9-15 letters</p>
        </>
      )} */}
    </section>
  )
}