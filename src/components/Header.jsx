import logo from '../assets/logo/BrainFlix-logo.svg';
import avatar from '../assets/images/Mohan-muruge.jpg';

function Header() {
    return (
      <div className="header">
          <div className="header--logo">
            <img src={logo} alt="Brainflix Logo" srcset="" />
          </div>
          <div>
              <div className="header--searchbar">
                <img src="../assets/logo/search.svg" alt="Search Box" />
              </div>
              <div>
                <img src={avatar} alt="Mohan Muruge Avatar" />
              </div>
          </div>
          <div className="header--button">
            <img src="../assets/logo/upload.svg" alt="Upload Button" />
          </div>
      </div>
    );
  }
  
  export default Header;
  