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
axios.get(`https://project-2-api.herokuapp.com?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b/:id`)
  .then(res => {
    const data = res.data;
    this.setState({ data: data });
  })
}

componentDidUpdate(prevProps) {
  if (match.params.id !== this.props.id) {
    axios.get(`https://project-2-api.herokuapp.com?api_key=ee26bdf7-c0ea-4050-8dde-c675af97ea7b/:id`)
    .then(res => {
    const data = res.data;
    this.setState({ data: data });
  });
  }
}

  render () {

  
    return (
      <>
        <CurrentVideo data={props.data}/>
        <CommentsForm />
        <CommentsList comments={props.data.comments}/>
        <VideoList />
      </>
  );


    }


      
    }
  

  export default Main;