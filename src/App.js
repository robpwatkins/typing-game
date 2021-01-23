import './App.css';
import { words } from './words';

function App() {
  console.log(words[0]);
  return (
    <div className="App">
      <h3>{words[0]}</h3>
    </div>
  );
}

export default App;
