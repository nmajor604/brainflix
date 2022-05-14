import logo from '../assets/logo/BrainFlix-logo.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';
import searchbox from '../assets/icons/search.svg';
import upload from '../assets/icons/upload.svg';
import './Header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header--logo'>
                <img src={logo} alt="Brainflix Logo" />
            </div>
            <div className='header--searchbar'>
                <div className='searchbar'>
                    <img src={searchbox} alt='Video Search Box'/>Search
                </div>
                <img src={avatar} alt='Mohan Muruge Avatar' width='100px' />
            </div>
            <div >
                <button className='header--button'><img src={upload} alt='Video Upload Button' width='100px'/>UPLOAD
                </button>
            </div>
        </div>
    );
}

export default Header;