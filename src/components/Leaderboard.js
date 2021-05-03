import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import Rankings from './Rankings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 21vh;
  /* box-shadow: inset 0px -10px 10px -10px black; */
`;


export default function Leaderboard() {
  const [allPlayers, setAllPlayers] = useState([]);
  
  const { isAuthenticated } = useAuth0();
  
  const getAllPlayers = async () => {
    const resp = await fetch('/api/getPlayers');
    const playersArr = await resp.json();
    console.log(playersArr);
    const allPlayers = playersArr.map(player => player.data).sort((a, b) => (a.level < b.level) ? 1 : -1);
    setAllPlayers(allPlayers);
    // setTopFive(allPlayers.filter((_, idx) => idx <= 4));
  }
  
  useEffect(() => {
    getAllPlayers();
  }, [])

  return (
    <Container>
      <h6><u>Leaderboard</u></h6>
      <Rankings allPlayers={allPlayers} />
      {!isAuthenticated ? <Login /> : <Logout />}
    </Container>
  )
}