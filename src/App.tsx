import React from "react";
import { Link } from "react-router-dom";
import meImage from "./assets/me.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/book">
          <img src={meImage} className="App-logo" alt="logo" />
        </Link>
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
