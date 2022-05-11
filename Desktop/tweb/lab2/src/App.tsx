import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {set} from "mobx";
import Counter from "./components/Counter";

function App() {
    const [value, setvalue] = useState('Хеллоу')



  return (
    <div className="App">
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;
