import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 55%;
`;

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Div>
      <u onClick={() => loginWithRedirect()}>Login</u>
      <span> to join the leaderboard!</span>
    </Div>
  );
}