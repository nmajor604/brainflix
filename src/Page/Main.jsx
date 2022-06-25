import CurrentVideo from '../components/CurrentVideo/CurrentVideo';
import CommentsForm from '../components/CommentsForm/CommentsForm';
import CommentsList from '../components/CommentsList/CommentsList';
import VideoList from '../components/VideoList/VideoList';
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
axios.get(`https://localhost:8080/videos`)
  .then(res => {
    this.setState({ videos: res.data });
  })

    axios.get(`https://localhost:8080/videos/${this.props.match.params.id}`)
    .then(res => {
    const data = res.data;
    this.setState({ data: data });
  });
}

componentDidUpdate = (prevProps, prevState) => {
  if (this.props.match.params.id !== prevProps.match.params.id) {
    axios.get(`https://localhost:8080/videos/${this.props.match.params.id}`)
    .then(res => {
    const data = res.data;
    this.setState({ data: data });
  });
  }
}

  render () {
    let VideoComment = '';
    if (this.state.data.comments) {
    VideoComment =  <CommentsList comments={this.state.data.comments}/>
}

      return (
        <>
          <CurrentVideo data={this.state.data}/>
          <CommentsForm />
          {VideoComment}
          <VideoList videos={this.state.videos}
          currentVideoId={this.state.data.id}/>
        </>
      );
      }
    }
  
  export default Main;