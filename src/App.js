<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
=======
import './App.scss';
import Header from './components/Header';
import VideoList from './components/VideoList';
import Main from './components/Main';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Main />
        <VideoList />
      </div>
    );
  }
  
>>>>>>> Stashed changes
}

export default App;
