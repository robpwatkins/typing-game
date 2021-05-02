import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Container = styled.div`
  font-size: 55%;
  > u {
    cursor: pointer;
  }
`;

export default function Logout() {

  const handleClick = () => {
    logout();
  }

  const { user, logout } = useAuth0();

  return (
    <Container>
      <p>Welcome, {user.nickname}!</p>
      <u onClick={handleClick}>Logout</u>
    </Container>
  )
}