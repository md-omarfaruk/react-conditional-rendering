import { useState } from 'react';
import './App.css';
import Conditional from './components/Conditional';

function App() {

  const [dress, setDress] = useState(false);

  return (
    <div style={{backgroundColor: "cyan", padding: "50px"}} className="App">
      <h1>Panjabi or T-shirt: {dress.toString()} choice</h1>
      <button style={{backgroundColor: "greenyellow", padding: "5px 30px", border: "1px solid grey", borderRadius: "5px"}} onClick={()=> setDress(!dress)}>Toggle</button>
      <Conditional dress= {dress} ></Conditional>
    </div>
  );
}

export default App;
