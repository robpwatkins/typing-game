import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Span = styled.span`
  font-weight: normal;
`;

export default function Leaderboard() {
  return (
    <Div>
      <h4>Leaderboard</h4>
      <h6>Player 1:<Span> score</Span></h6>
      <h6>Player 2:<Span> score</Span></h6>
      <h6>Player 3:<Span> score</Span></h6>
      <h6>Player 4:<Span> score</Span></h6>
      <h6>Player 5:<Span> score</Span></h6>
    </Div>
  )
}