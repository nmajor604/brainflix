import avatar from '../assets/images/Mohan-muruge.jpg';


function CommentsForm() {
    return (
        
        <div class="comments__input">
            <div class="comments__input--avatar">
                <img class="avatar" src={avatar} width='100px' alt="Mohan Muruge"></img>
            </div>
            <div id="comments__input--form">
                <div class="section__header">
                    Join the Conversation
                </div>
                <form id="comments__form">
                    <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Add a new comment"></textarea>
                    <div class="comment__button">
                        <button id="button">COMMENT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CommentsForm;



