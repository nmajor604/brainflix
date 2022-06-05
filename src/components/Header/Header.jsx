import logo from '../../assets/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchbox from '../../assets/icons/search.svg';
import upload from '../../assets/icons/upload.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div>
            <Link to="/"><img className='header__logo' src={logo} alt="Brainflix Logo"/>
            </Link>
            </div>
            <div className='header__searchbar'>
                <div className='searchbox'>
                    <div><img src={searchbox} alt='Video Search Box'/></div>
                    <div>Search</div>
                </div>
                <div>
                    <img className='header__avatar' src={avatar} alt='Mohan Muruge Avatar' />
                </div>
            </div>
            <div className='header__button'>
                <div><img src={upload} alt='Video Upload Icon'/></div>
                <div>UPLOAD</div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;
