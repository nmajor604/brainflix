import avatar from '../assets/images/Mohan-muruge.jpg';

function CommentsList (props) {
    return (
        <div>
            {props.comments.map((comment, index) => <div key={index}>
                 <div className='comments__list'>
                    <img src={avatar} alt="User Avatar" width="40px" height="40px"/>
                    <div>
                        <div className='comments__title'>
                            <p>{comment.name}</p>  
                            <p>{comment.timestamp}</p>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                    
                 </div>
                 <div>
                    
                 </div>
                 
                 
                </div>)}
        </div>
        );
    }
  

  export default CommentsList;