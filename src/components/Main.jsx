import CurrentVideo from './CurrentVideo';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import React from 'react';


function Main (props) {
    // console.log('main props', props.data)
      return (
          <>
            <CurrentVideo data={props.data}/>
            <CommentsForm />
            <CommentsList comments={props.data.comments}/>
          </>
      );
    }
  

  export default Main;