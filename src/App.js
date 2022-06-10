import logo from './logo.svg';
import './App.css';
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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
