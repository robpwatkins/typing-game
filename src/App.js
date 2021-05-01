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
  /* padding-bottom: 15%; */
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
