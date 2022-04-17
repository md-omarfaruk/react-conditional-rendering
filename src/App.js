import { useState } from 'react';
import './App.css';
import Conditional from './components/Conditional';

function App() {

  const [dress, setDress] = useState(false);

  return (
    <div className="App">
      <h1>Panjabi or T-shirt: {dress.toString()} choice</h1>
      <button onClick={()=> setDress(!dress)}>Toggle</button>
      <Conditional dress= {dress} ></Conditional>
    </div>
  );
}

export default App;
