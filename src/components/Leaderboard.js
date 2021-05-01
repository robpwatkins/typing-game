import React from 'react';
import styled from 'styled-components';

const LeaderboardBox = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: inset 0px -10px 10px -10px black; */
  > div {
    overflow: scroll;
    text-align: start;
    font-size: 55%;
    padding: 3px;
    /* border: 1px solid black; */
  }
`;

export default function Leaderboard() {
  return (
    <LeaderboardBox>
      <h6><u>Leaderboard</u></h6>
      <div>
        <span>Level</span>
        <span> WPM</span>
        <span> Accuracy</span>
        <p>10 95 95%</p>
        <p>Player 1: Level 10, WPM: 95, Accuracy: 95%</p>
        <p>Player 1: Level 10, WPM: 95, Accuracy: 95%</p>
        <p>Player 1: Level 10, WPM: 95, Accuracy: 95%</p>
        <p>Player 1: Level 10, WPM: 95, Accuracy: 95%</p>
      </div>
    </LeaderboardBox>
  )
}