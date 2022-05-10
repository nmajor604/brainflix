import logo from '../assets/logo/BrainFlix-logo.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';

function Header() {
    return (
        <div className='header'>
            <div className='header--logo'>
                <img src={logo} alt="Brainflix Logo" />
            </div>
            <div className='header--searchbar'>
                <img src='../assets/logo/search.svg' alt='Video Search Box' />
                <img src={avatar} alt='Mohan Muruge Avatar' width='100px' />
            </div>
            <div className='header--button'>
                <img src='../assets/logo/upload.svg' alt='Video Upload Button' />
            </div>
        </div>
    );
}

export default Header;