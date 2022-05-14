// import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import VideoList from './components/VideoList';
import data from './data/video-details.json';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      // selectedVideo: 
      selectedVideoIndex: 0,
  }
}

  changeVideoHandler = (index) => {
    this.setState({selectedVideoIndex: index});
  }
  
  render() {
    return (
      <>
        <Header />
        <Main data={this.state.data[this.state.selectedVideoIndex]}/>
        <VideoList 
          data={this.state.data} 
          changeVideoHandler={this.changeVideoHandler}
        />
      </>
    );
  }
}

export default App;
