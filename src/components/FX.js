import React from 'react';
import { VolumeUp, VolumeOff } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: -2%;
`;

export default function FX({ fxEnabled, handleClick }) {
  return (
    <Container>
      {fxEnabled 
        ? <VolumeUp style={{fontSize: "4vh"}} onClick={handleClick} />
        : <VolumeOff style={{fontSize: "4vh"}} onClick={handleClick} />
      }
    </Container>
  )
}