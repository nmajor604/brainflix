import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import NextVideos from './components/NextVideos';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NextVideos />
    </div>
  );
}

export default App;
