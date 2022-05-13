// import data from '../data/video-details.json';
import CurrentVideoInfo from './CurrentVideoInfo';
import CurrentVideoStats from './CurrentVideoStats';



function CurrentVideo(props) {
    return (
        <div className='currentvideo'>
            <video width='100%' height='240' controls poster={props.poster}>
            
            </video>
            <CurrentVideoStats />
            <CurrentVideoInfo />
        </div>
    );
}

export default CurrentVideo;