import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import Rankings from './Rankings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 21vh;
  border: 2px solid black;
  /* box-shadow: inset 0px -10px 10px -10px black; */
`;

export default function Leaderboard() {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      <h6><u>Leaderboard</u></h6>
      <Rankings />
      {!isAuthenticated ? <Login /> : <Logout />}
    </Container>
  )
}