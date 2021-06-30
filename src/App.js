import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);

    let btn = document.querySelector(".btn");
    let r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255);
    btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Numero: {number}</div>

        <button className="btn" onClick={randomNumber}>
          Criar novo número
        </button>
      </header>
    </div>
  );
}

export default App;
