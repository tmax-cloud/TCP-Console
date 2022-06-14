import logo from './logo.svg';
import '@/App.css';
import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const TestComponent = () => {
  return (
    <div>
      <Link to="test2/">Test2</Link>
    </div>
  );
};
const TestComponent2 = () => {
  return (
    <div>
      <Link to="/">Test</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">TCP Console</Button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TestComponent />} />
            <Route path="test2/" element={<TestComponent2 />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
