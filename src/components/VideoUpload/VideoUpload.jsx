import publish from '../../assets/icons/publish.svg';
// import { Link } from 'react-router-dom';
import previewPhoto from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss'
import '../font-families.scss'
import axios from 'axios';

function VideoUpload() {
    // const uploadAlert = function () {
    //     alert("Video Successfully Uploaded")
    // }
    
  const addVideo = function (e, title, description) {
    e.preventDefault();
    console.log('axios called')
    axios({
      url: 'http://localhost:8080/videos',
      method: 'POST',
      data: { title, description },
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      // this.setState({ videos: response.data });
    }).catch(console.error());
  };

  const handleFormSubmit = function (e) {
    const {
      title: {
        value: title,
      },
      decription: {
        value: description,
      }
    } = e.target.elements;
    console.log('addVideo called')
    addVideo(e, title, description);
  }

    return (
        <>
            <div className='upload__title'>Upload Video</div>
            <div className='upload'>
                <div className='upload__subtitle'>VIDEO THUMBNAIL</div>
                <img className='upload__preview' src={previewPhoto} alt="Video Preview" />
                <form 
                    className='upload__form'
                    onSubmit={handleFormSubmit}
                    action="http://localhost:8080/index.js"
                    method='POST'
                    
                >
                    <div>
                        <label className='upload__subtitle'>TITLE YOUR VIDEO</label>
                        <input className='upload__input' type="text" id="title" name="title" placeholder="Add a title to your video"></input>
                    </div>
                    <div>
                        <label className='upload__subtitle'>ADD A VIDEO DESCRIPTION</label>
                        <input className='upload__input--video' type="text" id="description" name='description' placeholder='Add a description to your video'></input>
                    </div>
                    <div className='upload__footer'>
                      {/* <Link to='/'> */}
                              <div><img src={publish} alt='Video Publish Icon'/></div>
                              <button className='publish__button' type='submit'>PUBLISH</button>
                              <div></div>
                      {/* </Link> */}
                    <div className='cancel__upload'>CANCEL</div>
                    </div>
                </form>
            </div>
            
        </>
        
    )
};

export default VideoUpload;

