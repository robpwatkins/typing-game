import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 21vh;
  /* box-shadow: inset 0px -10px 10px -10px black; */
  .rankings {
    overflow: scroll;
    text-align: start;
    margin-bottom: 5px;
    padding: 3px;
    /* border: 1px solid black; */
  }
`;

export default function Leaderboard() {
  return (
    <Container>
      <h6><u>Leaderboard</u></h6>
      <div className="rankings">
      </div>
      <Login />
    </Container>
  )
}