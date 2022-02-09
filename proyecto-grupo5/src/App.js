import logo from './logo.svg';
import './App.css';
import Login from './componets/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          branch de Alder
        </p>
        <p>
          Alder Dario Velasquez Obando
        </p>
        <p>
<<<<<<< HEAD
          AHHHHHHHHHHHHHHHH
        </p>
=======
          Desde la Rama Daniel
          </p>
>>>>>>> main
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login/>
      </header>
    </div>
  );
}

export default App;
