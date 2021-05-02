import { useState, useCallback, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 4vh;
  color: #282c34;
  background-color: ghostwhite;
`;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [highScore, setHighScore] = useState();

  const { user, isAuthenticated } = useAuth0();

  const createNewPlayer = async nickname => {
    const resp = await fetch('/api/createPlayer', {
      method: 'POST',
      body: JSON.stringify({
        nickname,
      })
    })
    const player = await resp.json();
    setCurrentPlayer(player);
  }

  const getCurrentPlayer = useCallback(async nickname => {
    const resp = await fetch('/api/getPlayer', {
      method: 'POST',
      body: JSON.stringify({
          nickname
        })
      });
      const [player] = await resp.json();
      if (!player) {
        return createNewPlayer(nickname);
      }
      setCurrentPlayer(player);
      setHighScore(player.data.high_score);
    }, [])
    
    useEffect(() => {
      if (isAuthenticated) {
        getCurrentPlayer(user.nickname);
      }
    }, [isAuthenticated, getCurrentPlayer])

  console.log(currentPlayer);
  return (
    <Container className="App">
      <GlobalStyle />
      {!gameStarted 
        ? <StartScreen
            setGameStarted={setGameStarted}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        : <TypingGame 
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            difficulty={difficulty} 
          />}
    </Container>
  );
}

export default App;
