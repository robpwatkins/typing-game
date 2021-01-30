import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

function App() {
  const [gameStarted, setGameStarted] = useState(true);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="App">
      { !gameStarted 
          ? <StartScreen
            setGameStarted={setGameStarted}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          : <TypingGame />}
    </div>
  );
}

export default App;
