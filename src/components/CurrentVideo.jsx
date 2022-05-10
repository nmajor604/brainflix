import data from '../data/video-details.json';
import CurrentVideoInfo from './CurrentVideoInfo';
import CurrentVideoStats from './CurrentVideoStats';

const image = data[0].image;

function CurrentVideo() {
    return (
        <div className='currentvideo'>
            <video width='100%' height='240' controls poster={image}>
            
            </video>
            <CurrentVideoStats />
            <CurrentVideoInfo />
        </div>
    );
}

export default CurrentVideo;