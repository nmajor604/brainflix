import Header from '../Header/Header.jsx';
import publish from '../../assets/icons/publish.svg';
import { Link } from 'react-router-dom';
import previewPhoto from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss'

function VideoUpload(props) {
    const uploadAlert = function () {
        alert("Video Successfully Uploaded")
    }
    
    return (
        <div className='upload'>
            <Header />
            <div className='upload__title'>Upload Video</div>
            <div className='upload__subtitle'>VIDEO THUMBNAIL</div>
            <img className='upload__preview' src={previewPhoto} alt="Video Preview" />
            <div>
                <div><label className='upload__subtitle'>TITLE YOUR VIDEO</label></div>
                <div><input className='upload__input' type="text" id="title" name="title" placeholder="Add a title to your video"></input></div>
                <div><label className='upload__subtitle'>ADD A VIDEO DESCRIPTION</label></div>
                <div><input className='upload__input' type="text" id="description" name='description' placeholder='Add a description to your video'></input></div>
            </div>
            
            
            <Link to='/'>
                <div onClick={uploadAlert} className='publish__button'>
                    <div><img src={publish} alt='Video Publish Icon'/></div>
                    <div>PUBLISH</div>
                    <div></div>
                </div>
            </Link>
            <div className='cancel__upload'>CANCEL</div>
        </div>
    )
};

export default VideoUpload;