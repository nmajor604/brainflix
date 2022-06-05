import avatar from '../../assets/images/Mohan-muruge.jpg';
import addcomment from '../../assets/icons/add_comment.svg';
import './CommentsForm.scss'

function CommentsForm() {
    return (
        <div className='comments__section'>
            <div className='comments__section--header'>
                3 Comments
            </div>
                <div className="comments__input">
                    <img className="comments__input--avatar" src={avatar} alt="Mohan Muruge"></img>
                    <div className='comments__form--tablet'>
                        <div className="comments__input--form">
                            <form id="comments__form">
                                    <div className="section__header">
                                        JOIN THE CONVERSATION
                                    </div>
                                    <div>
                                        <input name="comment" id="comment" placeholder="Add a new comment"></input>
                                    </div>
                            </form>
                        </div>
                        <div className="comment__input--form--button">
                            <div><img src={addcomment} alt="Add Comment Icon" /></div>
                            <div>COMMENT</div>
                            <div></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CommentsForm;



