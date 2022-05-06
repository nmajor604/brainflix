import CommentsForm from "./CommentsForm";
import Comments from "./Comments";

function CurrentVideo() {
    return (
      <>
        <div className="video--current">
            <video src=""></video>
        <div className="video--title"></div>
        <div className="video--stats"></div>
        <div className="video--description"></div>
        </div>
        <CommentsForm />
        <Comments />
      </>
      
    );
  }
  
  export default CurrentVideo;
  