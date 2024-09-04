import logo from './logo.svg';
import './App.css';
import { add } from './add';

function App() {
  const bla = add(1,2);
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
          Inline wasm works with react: {bla}
        </a>
      </header>
    </div>
  );
}

export default App;
