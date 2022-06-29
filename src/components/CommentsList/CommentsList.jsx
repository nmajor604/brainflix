import './CommentsList.scss';

function convertTimestamp(timestamp){
    const formattedDate = new Date(timestamp);
    const Day = formattedDate.getDate();
    const Month = formattedDate.getMonth();
    const Year = formattedDate.getFullYear();
    const dateString = (Day + 1) + '/' + (Month + 1) + '/' + Year;
    return dateString;
}

function CommentsList (props) {
    console.log('propss', props)
    return (
        <div>
            {props.comments.map((comment, index) => <div key={index}>
                 <div className='comments__list'>
                    <div className='comments__list--avatar' alt="User Avatar"></div>
                    <div>
                        <div className='comments__list--title'>
                            <div className='comments__list--name'>{comment.name}</div>  
                            <div className='comments__list--date'>{convertTimestamp(comment.timestamp)}</div>
                        </div>
                        <div className='comments__list--content'>{comment.comment}</div>
                    </div>
                 </div>
                </div>)}
        </div>
        );
    }
  
  export default CommentsList;