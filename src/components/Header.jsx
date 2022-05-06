function Header() {
    return (
      <div className="header">
          <div className="header--logo">
            <img src="../assets/logo/BrainFlix-logo.svg" alt="Brainflix Logo" srcset="" />
          </div>
          <div>
              <div className="header--searchbar">
                <img src="../assets/logo/search.svg" alt="Search Box" />
              </div>
              <div>
                <img src="../assets/images/Mohan-muruge.jpg" alt="Mohan Muruge Avatar" />
              </div>
          </div>
          <div className="header--button">
            <img src="../assets/logo/upload.svg" alt="Upload Button" />
          </div>
      </div>
    );
  }
  
  export default Header;
  