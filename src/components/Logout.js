import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Content = styled.div`
  text-decoration: underline;
  font-size: 55%;
  cursor: pointer;
`;

export default function Logout() {

  const handleClick = () => {
    logout();
  }

  const { logout } = useAuth0();

  return <Content onClick={handleClick}>logout</Content>;
}