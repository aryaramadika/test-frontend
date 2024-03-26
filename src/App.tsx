import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      {/* Instructions */}
      {/* 1. Add UI for connecting wallet using Tailwind CSS https://tailwindcss.com/ */}
      {/* 2. Implement wallet connection function using ethers.js resource:https://docs.ethers.org/v5/ */}
      {/* 3. Display connected wallet address UI component */}
      {/* 4. Display account balance UI component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
