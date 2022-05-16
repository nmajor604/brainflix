import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import VideoList from './components/VideoList';
import data from './data/video-details.json';
import videos from './data/videos.json';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0],
      videos: videos
  }
}

  changeVideoHandler = (id) => {

    const currentVideo = data.find((video) => video.id === id)
    this.setState({data: currentVideo});
  }
  
  render() {
    return (
      <>
        <Header />
        <div className='desktop'>
          <div>
            <Main data={this.state.data}/>
          </div>
          <div>
            <VideoList 
              data={this.state.videos} 
              currentVideoId={this.state.data.id}
              changeVideoHandler={this.changeVideoHandler}
            />
          </div>
        </div>
        
      </>
    );
  }
}

export default App;
