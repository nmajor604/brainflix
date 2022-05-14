import CurrentVideoInfo from './CurrentVideoInfo';
import CurrentVideoStats from './CurrentVideoStats';

function CurrentVideo(props) {
    console.log('Current Video Props', props);
    return (
        <div className='currentvideo'>
            <video width='300' height='240' poster={props.data.image}>
            </video>
            <CurrentVideoStats 
                channel={props.data.channel}
                date={props.data.timestamp}
                views={props.data.views}
                likes={props.data.likes}
            />
            <CurrentVideoInfo 
                title={props.data.title}
                description={props.data.description}
             />
        </div>
    );
}

export default CurrentVideo;