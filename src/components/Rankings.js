import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: scroll;
  text-align: start;
  margin-bottom: 5px;
  padding: 3px;
  font-size: 55%;
`;

export default function Rankings({ allPlayers }) {
  return (
    <Container>
      {allPlayers.length &&
        allPlayers.map((player, idx) => {
          return (
            <div key={idx}>
              <span>{player.nickname}: level {player.level}</span>
            </div>
          )
        })
      }
    </Container>
  )
}