import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: ghostwhite;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4vh;
  font-family: 'Courier New', Courier, monospace;
  color: #282c34;
`;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <Div className="App">
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
    </Div>
  );
}

export default App;
