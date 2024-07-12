
import './App.css';
import { useState } from 'react';

function App(props) {
  
  const [color, setcolor] = useState('olive');
  
  return (
    <div style={{backgroundColor:color, width:'100%', height:'100%',}}>
    
      <div className='selectcolor'>
        <button onClick={() => setcolor("Red")} style={{backgroundColor:'Red'}}>Red</button>
        <button onClick={() => setcolor("pink")} style={{backgroundColor:'Pink'}}>Pink</button>
        <button onClick={() => setcolor("Blue")} style={{backgroundColor:'Blue'}}>Blue</button>
        <button onClick={() => setcolor("Black")} style={{backgroundColor:'Black', color:'white'}}>Black</button>
        <button onClick={() => setcolor("Yellow")} style={{backgroundColor:'Yellow'}}>Yellow</button>
        <button onClick={() => setcolor("Green")} style={{backgroundColor:'Green'}}>Green</button>
      </div>
      
    </div>
  );
}

export default App;
