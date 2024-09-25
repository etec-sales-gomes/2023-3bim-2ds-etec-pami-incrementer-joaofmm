import React, { useState } from "react";
import {Button} from "./components/button"
import './App.css';
import { Counter } from "./components/contador";

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
  let handleChange=(e) =>{
    setCount(e.target.value)

  }

  return (
    <div class="App">
      <Button onclick= {increment} text='+'></Button>
      <Counter count={count} handle={handleChange}></Counter>
      <Button onclick= {decrement} text='-'></Button>

    </div>
  );
}
