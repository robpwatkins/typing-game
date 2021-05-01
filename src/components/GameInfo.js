import React from 'react';
import styled from 'styled-components';
import Level from './Level';
import FX from './FX';

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;
  text-align: start;
`;

export default function GameInfo({ level, difficulty, fxEnabled, setFxEnabled }) {
  return (
    <Container>
      <Level level={level} />
      <h6>{difficulty}</h6>
      <FX handleClick={() => setFxEnabled(!fxEnabled)} fxEnabled={fxEnabled} />
    </Container>
  )
}