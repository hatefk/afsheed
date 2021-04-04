import logo from './logo.svg';
import './App.css';

// not used, this is default react app page

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
      </header>
      <p>
        This project is being built on top of <a href="https://www.youtube.com/watch?v=lXtdDx9RGzM">this example.</a>
      </p>
    </div>
  );
}

export default App;
