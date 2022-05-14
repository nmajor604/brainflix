function VideoList (props) {
    return (
        <div>
            <ul>
            {props.data.map((data, index) => <div key={index}>
                 <video 
                    src={data.image} 
                    alt="" 
                    width="100px" 
                    poster={data.image}
                    onClick={() => props.changeVideoHandler(index)}
                 >
                 </video>
                 {data.channel} 
                 {data.title}
                </div>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;