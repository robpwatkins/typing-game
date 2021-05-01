import React from 'react';
import styled from 'styled-components';

const Selector = styled.span`
  cursor: default;
  font-size: 70%;
  font-weight: ${props => props.difficulty === props.text ? "bold" : null};
  &:hover {
    cursor: default;
    font-weight: bold;
  }
  &:nth-last-child(even) {
    font-weight: normal;
  }
`;

export default function Selection({ difficulty, setDifficulty }) {
  
  const handleClick = event => {
    setDifficulty(event.target.innerText);
  }

  return (
    <>
      <Selector difficulty={difficulty} text={"easy"} onClick={handleClick}>
        easy
      </Selector>
      <Selector> | </Selector>
      <Selector difficulty={difficulty} text={"medium"} onClick={handleClick}>
        medium
      </Selector>
      <Selector> | </Selector>
      <Selector difficulty={difficulty} text={"difficult"} onClick={handleClick}>
        difficult
      </Selector>
    </>
  )
}