import avatar from '../assets/images/Mohan-muruge.jpg';
import addcomment from '../assets/icons/add_comment.svg';
import './CommentsForm.scss'

function CommentsForm() {
    return (
        <div className='comments--section'>
        <p>3 Comments</p>
        <div class="comments__input">
            <div class="comments__input--avatar">
                <img class="avatar" src={avatar} alt="Mohan Muruge"></img>
            </div>
            <div id="comments__input--form">
                <div class="section__header">
                    Join the Conversation
                </div>
                <form id="comments__form">
                    <textarea name="comment" id="comment" cols="50" rows="10" placeholder="Add a new comment"></textarea>
                    <div class="comment__button">
                        <img src={addcomment} alt="Add Comment Icon" />
                        <div>COMMENT</div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default CommentsForm;



