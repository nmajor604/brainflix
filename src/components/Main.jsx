import CurrentVideo from './CurrentVideo';
// import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import React from 'react';


function Main (props) {
    
      return (
          <>
            <CurrentVideo poster={props.data.image}/>
            {/* <CommentsForm /> */}
            <CommentsList comments={props.data.comments}/>
          </>
      );
    }
  

  export default Main;