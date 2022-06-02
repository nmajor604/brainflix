import Header from '../Header/Header.jsx';
import Main from '../Main';
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';


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
      this.setState({ data: data });
    })
}

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      axios.get(`https://project-2-api.herokuapp.com?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b`)
      .then(res => {
      const data = res.data;
      this.setState({ data: data });
    });
    }
  }

  changeVideoHandler = (id) => {

    const currentVideo = data.find((video) => video.id === id)
    this.setState({data: currentVideo});
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/upload' component={VideoUpload} />
          <Route path='/videos/:id' component={Main} />
        </Switch>
      
      </BrowserRouter>
      
        
    );
  }
}

export default App;
