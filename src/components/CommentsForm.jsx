import avatar from '../assets/images/Mohan-muruge.jpg';
import addcomment from '../assets/icons/add_comment.svg';
import './CommentsForm.scss'

function CommentsForm() {
    return (
        <div className='comments__section'>
        <div className='comments__section--header'>3 Comments</div>
        <div className="comments__input">
            <div className="comments__input--avatar">
                <img className="avatar" src={avatar} alt="Mohan Muruge"></img>
            </div>
            <div className="comments__input--form">
                <div className="section__header">
                    JOIN THE CONVERSATION
                </div>
                <form id="comments__form">
                    <textarea name="comment" id="comment" cols="50" rows="10" placeholder="Add a new comment"></textarea>
                    <div class="comment__button">
                        <div><img src={addcomment} alt="Add Comment Icon" /></div>
                        <div>COMMENT</div>
                        <div></div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default CommentsForm;



