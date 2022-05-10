import data from '../data/video-details.json';

function VideoList () {
    return (
        <div>
            <ul>
            {data.map((data, index) => <div key={index}>
                 <img src={data.image} alt="" width="100px" /> 
                 {data.channel}  
                 {data.title}
                </div>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;