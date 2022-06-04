import CurrentVideo from './CurrentVideo/CurrentVideo';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';
import VideoList from './VideoList/VideoList';
import React from 'react';
import axios from 'axios';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      videos: []
  }
}

componentDidMount() {
axios.get(`https://project-2-api.herokuapp.com/videos?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b`)
  .then(res => {
    console.log(res);
    this.setState({ videos: res.data });
  })

    axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b/`)
    .then(res => {
    const data = res.data;
    console.log('main video first', data);
    this.setState({ data: data });
  });
}

componentDidUpdate(prevProps, id, match) {
  if (match.params.id !== this.props.id) {
    axios.get(`https://project-2-api.herokuapp.com/${id}/?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b/`)
    .then(res => {
    const data = res.data;
    this.setState({ data: data });
  });
  }
}

  render () {

  
    return (
      <>
        <CurrentVideo data={this.props.data}/>
        <CommentsForm />
        <CommentsList comments={this.props.data}/>
        <VideoList videos={this.props.videos}/>
      </>
  );


    }


      
    }
  

  export default Main;