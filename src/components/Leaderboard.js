import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const LeaderboardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 21vh;
  /* box-shadow: inset 0px -10px 10px -10px black; */
  > div {
    overflow: scroll;
    text-align: start;
    margin-bottom: 5px;
    padding: 3px;
    /* border: 1px solid black; */
  }
  p {
    font-size: 55%;
  }
`;

export default function Leaderboard() {
  return (
    <LeaderboardBox>
      <h6><u>Leaderboard</u></h6>
      <div>
      </div>
      <Login />
    </LeaderboardBox>
  )
}