import logo from './logo.svg';
import '@/App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">TCP Console</Button>
      </header>
    </div>
  );
}

export default App;
