import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="container">
      <img alt="Get Giphy logo" src="images/logo.png" height="80" />
      <span className='company-name'>GetGiphy</span>
      <Nav />
    </header>
  );
};

export default Header;
