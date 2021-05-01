import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  height: 21vh;
  overflow: scroll;
  align-items: flex-start;
  > p {
    font-size: 55%;
  }
`;

export default function Leaderboard() {
  return (
    <Div>
      <h5><u>Leaderboard</u></h5>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 1: score</p>
      <p>Player 2: score</p>
      <p>Player 3: score</p>
      <p>Player 4: score</p>
      <p>Player 5: score</p>
    </Div>
  )
}