import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const makeApiRequest = () => {
    axios.get('/api//testWithCurrentUser').then(({data}) => {
        console.log({data});
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload dev.
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
      <button onClick={makeApiRequest}>make requies</button>
    </div>
  );
}

export default App;
