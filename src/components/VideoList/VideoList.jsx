import { Link } from 'react-router-dom';
import './VideoList.scss';

function VideoList (props) {
    return (
        <div>
            <div className='videolist__header'>NEXT VIDEOS</div>
            <ul className="video--list">
            {props.data.filter((current) => props.currentVideoId !== current.id).map((data) => <li className="videolist" key={data.id}>
                <Link to='/videos/:id'>
                 <img 
                    className="video--thumbnail"
                    src={data.image} 
                    alt="Video Thumbnail" 
                    width="100px" 
                    poster={data.image}
                    onClick={() => props.changeVideoHandler(data.id)}
                    
                 >
                 </img>
                 <div className='video__info'>
                    <div className='video__info--title'>{data.title}</div>
                    <div className='video__info--channel'>{data.channel} </div>
                 </div>
                 </Link>

                </li>)}
            </ul>
        </div>
        );
    }
  

  export default VideoList;
