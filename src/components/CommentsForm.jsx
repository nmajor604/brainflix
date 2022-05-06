function CommentsForm() {
    return (
        <>
            <div className="comment--form">
                <div className="comments--avatar">
                    <img src="../assets/images/Mohan-muruge.jpg" alt="Mohan Muruge"/>
                </div>
                <div className="comments--form">
                    <div>
                        JOIN THE CONVERSATION
                    </div>
                    <textarea id="comment" name="comment" rows="4" cols="20" />
                    <img src="../assets/logo/add_comment.svg" alt="Add New Comment Button" />
                </div>
            </div>
        </>
    );
  }
  
  export default CommentsForm;