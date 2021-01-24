import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import TypingGame from './components/TypingGame';

function App() {
  const [gameStarted, setGameStarted] = useState(true);

  return (
    <div className="App">
      { !gameStarted 
          ? <StartScreen handleClick={() => setGameStarted(true)} />
          : <TypingGame />}
    </div>
  );
}

export default App;
