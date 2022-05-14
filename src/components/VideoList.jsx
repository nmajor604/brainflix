

function VideoList (props) {
    return (
        <div>
            <h4>NEXT VIDEOS</h4>
            <ul >
            {props.data.filter((current) => props.currentVideoId !== current.id).map((data) => <div className="videolist" key={data.id}>
                
                 <video 
                    src={data.image} 
                    alt="" 
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