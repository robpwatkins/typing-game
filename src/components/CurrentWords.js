import React, { useState, useEffect, useCallback } from 'react';
import { words } from '../words';

export default function CurrentWords({ wordList, letterIndex }) {
  
  return (
    <section className="current-words">
      {wordList.map((word, index) => {
        return (
          <p key={index}>{
            index < wordList.length - 1
            ? word
            : (
              wordList[wordList.length - 1].split('').map((letter, index) => {
                return (
                  <span
                    key={index}
                    style={index < letterIndex ? {fontWeight: "bold"} : null}
                  >
                    {letter}
                  </span>
                )
              })
            )
          }</p>
        )
      })}
    </section>
  )
}