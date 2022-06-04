import { Link } from 'react-router-dom';
import './VideoList.scss';

function VideoList (props) {
    return (
        <div>
            <div className='videolist__header'>NEXT VIDEOS</div>
            <ul className="video--list">
            {props.videos.filter((current) => props.currentVideoId !== current.id).map((videos) => <li className="videolist" key={videos.id}>
                <Link to={`/videos/${videos.id}`}>
                 <img 
                    className="video--thumbnail"
                    src={videos.image} 
                    alt="Video Thumbnail" 
                    width="100px" 
                    poster={videos.image}
                    
                 >
                 </img>
                 <div className='video__info'>
                    <div className='video__info--title'>{videos.title}</div>
                    <div className='video__info--channel'>{videos.channel} </div>
                 </div>
                 </Link>

                </li>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;
