// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import VideoList from './components/VideoList';
import Comments from './components/Comments';
import CurrentVideo from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentVideo />
      <Comments />
      <VideoList />
    </div>
  );
}

export default App;
