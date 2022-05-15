import CurrentVideoInfo from './CurrentVideoInfo';
import CurrentVideoStats from './CurrentVideoStats';
import './CurrentVideo.scss'

function CurrentVideo(props) {
    console.log('Current Video Props', props);
    return (
        <div >
            <video className='currentvideo' controls poster={props.data.image}>
            </video>
            <h1 className='currentvideo--title'>{props.data.title}</h1>
            <CurrentVideoStats 
                channel={props.data.channel}
                date={props.data.timestamp}
                views={props.data.views}
                likes={props.data.likes}
            />
            <CurrentVideoInfo 
                description={props.data.description}
             />
        </div>
    );
}

export default CurrentVideo;