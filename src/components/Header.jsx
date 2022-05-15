import logo from '../assets/logo/BrainFlix-logo.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';
import searchbox from '../assets/icons/search.svg';
import upload from '../assets/icons/upload.svg';
import './Header.scss';

function Header() {
    return (
        <div className='header'>
            <img className='header--logo' src={logo} alt="Brainflix Logo" />
            <div className='header--searchbar'>
                <div className='searchbox'>
                    <img src={searchbox} alt='Video Search Box'/>
                    <div>Search</div>
                </div>
                <img className='header--avatar' src={avatar} alt='Mohan Muruge Avatar' />
            </div>
            
            <div className='header--button'>
                <img src={upload} alt='Video Upload Icon'/>
                <div>UPLOAD</div>
            </div>
            
        </div>
    );
}

export default Header;