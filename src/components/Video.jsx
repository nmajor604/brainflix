function Video (props) {
    return (
        <div className='videoitem'>
            Video
            <div className="video--thumbnail">
                thumbnail
                {props.thumbnail}
            </div>
            <div className="video--title">
                title
                {props.title}
            </div>
            <div className="video--author">
                author
                {props.author}
            </div>
        </div>
    );
    
  }

  export default Video;