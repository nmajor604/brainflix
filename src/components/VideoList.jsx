// import data from '../data/video-details.json';

function VideoList (props) {
    return (
        <div>
            <ul>
            {props.data.map((data, index) => <div key={index}>
                 <img src={data.image} alt="" width="100px" /> 
                 {data.channel}  
                 {data.title}
                </div>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;