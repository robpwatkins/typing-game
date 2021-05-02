import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 55%;
  > u {
    cursor: pointer;
  }
`;

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <u onClick={() => loginWithRedirect()}>Login</u>
      <span> to join the leaderboard!</span>
    </Container>
  );
}