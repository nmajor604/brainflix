// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import VideoList from './components/VideoList';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Comments />
      <VideoList />
    </div>
  );
}

export default App;
