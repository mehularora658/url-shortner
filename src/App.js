import logo from './logo.svg';
import './App.css';
import Inputshortner from './Inputshortner';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputvalue,setinputvalue] = useState("");
  return (
    <div className="Container">
      <Inputshortner setinputvalue={setinputvalue}/>
      <BackgroundAnimate/>
      <LinkResult inputvalue={inputvalue}/>
    </div>
  );
}

export default App;
