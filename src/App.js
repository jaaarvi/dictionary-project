import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary
      </header>
      <Dictionary />
      <footer className="App-footer"><small><a href="https://github.com/jaaarvi/dictionary-project" target="_blank" rel="noreferrer noopener">Open-source code</a> by Jes Jarvinen</small></footer>
      </div>
    </div>
  );
}

export default App;
