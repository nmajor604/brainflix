import CurrentVideo from './CurrentVideo';
// import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import React from 'react';


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
          <>
            <CurrentVideo />
            {/* <CommentsForm /> */}
            <CommentsList />
          </>
      );
    }
  }

  export default Main;