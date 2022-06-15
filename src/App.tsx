import logo from './logo.svg';
import '@/App.css';
import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestComponent } from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">TCP Console</Button>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<TestComponent path="test2/" buttonText="Test2" />}
            />
            <Route
              path="test2/"
              element={<TestComponent path="/" buttonText="Test" />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
