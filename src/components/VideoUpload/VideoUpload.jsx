import publish from '../../assets/icons/publish.svg';
import { Link } from 'react-router-dom';
import previewPhoto from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss'
import '../font-families.scss'

function VideoUpload(props) {
    const uploadAlert = function () {
        alert("Video Successfully Uploaded")
    }
    
    addVideo = (e, title, description) => {
    e.preventDefault();
    axios({
      url: 'http://localhost:8080/',
      method: 'POST',
      data: { title, description },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      this.setState({ videos: response.data });
    });
  };

handleFormSubmit = (e) => {
    const {
      title: {
        value: title,
      },
      decription: {
        value: description,
      }
    } = e.target.elements;
    this.addVideo(e, title, description);
  }

    return (
        <>
            <div className='upload__title'>Upload Video</div>
            <div className='upload'>
                <div className='upload__subtitle'>VIDEO THUMBNAIL</div>
                <img className='upload__preview' src={previewPhoto} alt="Video Preview" />
                <div 
                    className='upload__form'
                    onSubmit={this.handleFormSubmit}
                >
                    <div>
                        <label className='upload__subtitle'>TITLE YOUR VIDEO</label>
                        <input className='upload__input' type="text" id="title" name="title" placeholder="Add a title to your video"></input>
                    </div>
                    <div>
                        <label className='upload__subtitle'>ADD A VIDEO DESCRIPTION</label>
                        <input className='upload__input--video' type="text" id="description" name='description' placeholder='Add a description to your video'></input>
                    </div>
                </div>
            </div>
            <div className='upload__footer'>
                <Link to='/' className='publish__button' onClick={uploadAlert}>
                        <div><img src={publish} alt='Video Publish Icon'/></div>
                        <div>PUBLISH</div>
                        <div></div>
                </Link>
                <div className='cancel__upload'>CANCEL</div>
            </div>
        </>
        
    )
};

export default VideoUpload;

