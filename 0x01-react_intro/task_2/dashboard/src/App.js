import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils.js';
import './App.css';

function App() {
  return (
   <>
    <div className="App-header">
      <img src={logo}></img>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email"></input>
      <label htmlFor="password">Password: </label>
      <input id="password" type="password"></input>
      <button>OK</button>
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
   </>
  );
}

export default App;
