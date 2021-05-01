import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export default function Leaderboard() {
  return (
    <Div>
      <h4>Leaderboard</h4>
      <h6>Player 1</h6>
      <h6>Player 2</h6>
      <h6>Player 3</h6>
      <h6>Player 4</h6>
      <h6>Player 5</h6>
    </Div>
  )
}