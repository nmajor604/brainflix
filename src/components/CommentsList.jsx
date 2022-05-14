function CommentsList (props) {
    return (
        <div>
            {props.comments.map((comment, index) => <div key={index}>
                 
                 <p>{comment.name}</p>  
                 <p>{comment.comment}</p>
                 
                </div>)}
        </div>
        );
    }
  

  export default CommentsList;