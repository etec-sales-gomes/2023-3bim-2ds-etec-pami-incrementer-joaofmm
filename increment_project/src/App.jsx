import React, { useState } from "react";
import {Button} from "./components/button"
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      return (prevCount -= 1); 
      
    });
  }

  return (
    <div class="App">
      <Button onclick= {increment} text='+'></Button>
      <h1>{count}</h1>
      <Button onclick= {decrement} text='-'></Button>

    </div>
  );
}
