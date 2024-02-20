import React from 'react';
import profileIcon from './profile-icon.svg'; // Import your profile icon image
import './Header.css'

const Header = () => {
    return (
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span role="img" aria-label="search" className='search-symbol'>&#128269;</span>
        </div>
        <div className="profile-icon-container">
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        </div>
      </header>
    );
  };

export default Header;
