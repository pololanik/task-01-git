import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import Link from './components/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text="My beatiful Title" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
