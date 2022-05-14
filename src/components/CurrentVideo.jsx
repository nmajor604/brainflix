import CurrentVideoInfo from './CurrentVideoInfo';
import CurrentVideoStats from './CurrentVideoStats';

function CurrentVideo(props) {
    console.log('Current Video Props', props);
    return (
        <div className='currentvideo'>
            <video width='100%' height='240' controls poster={props.data.image}>
            </video>
            <h1>{props.data.title}</h1>
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