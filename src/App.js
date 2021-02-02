import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className={gameStarted ? "App game-started" : "App"}>
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
    </div>
  );
}

export default App;
