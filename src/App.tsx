import React from "react";
import meImage from "./assets/me.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={meImage} className="App-logo" alt="logo" />
        <p>
          <code>Berdimyradov Kerim</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/berdimyradov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
