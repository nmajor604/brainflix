import data from "../data/video-details.json";

const title = data[0].title;
const author = data[0].channel;

function Video() {
    return (
      <>
        <div className="video--avatar">
          
        </div>
        <div className="video--title">
          <h1>{title}</h1>
        </div>
        <div className="video--author">
          <h1>{author}</h1>
        </div>
      </>
      
    );
  }
  
  export default Video;