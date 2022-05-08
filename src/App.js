import './App.scss';
import Header from './components/Header';
import VideoList from './components/VideoList';
import Comments from './components/Comments';
import CurrentVideo from './components/CurrentVideo';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <CurrentVideo />
        <Comments />
        <VideoList />
      </div>
    );
  }
  
}

export default App;
