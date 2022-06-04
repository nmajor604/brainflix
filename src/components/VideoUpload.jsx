import Header from './Header/Header.jsx';
import publish from '../assets/icons/publish.svg';

function VideoUpload(props) {
    return(
        <>
            <Header />
            <div>Upload Video</div>
            <div>VIDEO THUMBNAIL</div>
            {/* <img src={props.data.image} alt="Video Thumbnail" /> */}
            <label for="title">TITLE YOUR VIDEO</label>
            <input type="text" id="title" name="title" placeholder="Add a title to your video"></input>
            <label for="description">ADD A VIDEO DESCRIPTION</label>
            <input type="text" id="description" name='description' placeholder='Add a description to your video'></input>
            <div className='publish_button'>
                <div><img src={publish} alt='Video Publish Icon'/></div>
                <div>PUBLISH</div>
                <div></div>
            </div>
            <div className='cancel_upload'>CANCEL</div>
        </>
    )
};

export default VideoUpload;