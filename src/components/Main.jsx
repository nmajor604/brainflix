import CurrentVideo from './CurrentVideo/CurrentVideo';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';
import VideoList from './VideoList/VideoList';
import React from 'react';


function Main (props) {
      return (
          <>
            <CurrentVideo data={props.data}/>
            <CommentsForm />
            <CommentsList comments={props.data.comments}/>
            <VideoList />
          </>
      );
    }
  

  export default Main;