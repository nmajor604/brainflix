import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import data from "../data/video-details.json";

const image = data[0].image;

function CurrentVideo() {
    return (
      <>
        <div className="video--current">
            <video width="320" height="240" controls poster={image}>
            <source src="" type="" />
            </video>
        <div className="video--title">
            
        </div>
        <div className="video--stats"></div>
        <div className="video--description"></div>
        </div>
        <CommentsForm />
        <Comments />
      </>
      
    );
  }
  
  export default CurrentVideo;
  