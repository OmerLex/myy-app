import logo from './logo.svg';
import './App.css';
import Title from './Title';
import MenuItems from './components/MenuItems';


// function Title(){
//   return (
//     <h1>Hello React!!!</h1>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>Hello React!!!</h1>
      <Title />
      <MenuItems />
      <Title />
      <Title />
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
    </div>
  );
}

export default App;
