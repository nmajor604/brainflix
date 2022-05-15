import avatar from '../assets/images/Mohan-muruge.jpg';
import './CommentsList.scss';

function CommentsList (props) {
    return (
        <div>
            {props.comments.map((comment, index) => <div key={index}>
                 <div className='comments__list'>
                    <img className='comments__avatar' src={avatar} alt="User Avatar"/>
                    <div>
                        <div className='comments__title'>
                            <div>{comment.name}</div>  
                            <div>{comment.timestamp}</div>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                 </div>
                </div>)}
        </div>
        );
    }
  

  export default CommentsList;