import './VideoList.scss';

function VideoList (props) {
    return (
        <div>
            <h4>NEXT VIDEOS</h4>
            <ul className="video--list">
            {props.data.filter((current) => props.currentVideoId !== current.id).map((data) => <div className="videolist" key={data.id}>
                
                 <video 
                    className="video--thumbnail"
                    src={data.image} 
                    alt="Video Thumbnail" 
                    width="100px" 
                    poster={data.image}
                    onClick={() => props.changeVideoHandler(data.id)}
                    
                 >
                 </video>
                 <div>
                    <div>{data.channel} </div>
                    <div>{data.title}</div>
                 </div>
                 
                </div>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;