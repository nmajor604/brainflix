import Header from './components/Header/Header.jsx';
import Main from './components/Main';
import VideoList from './components/VideoList/VideoList';
import data from './data/video-details.json';
import videos from './data/videos.json';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0],
      videos: videos
  }
}

componentDidMount() {
  axios.get(`https://project-2-api.herokuapp.com?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b`)
    .then(res => {
      const data = res.data;
      this.setState({ videos });
    })
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
