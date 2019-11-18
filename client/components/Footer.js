import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="Footer">&copy; {year} GetGiphy</footer>;
};

export default Footer;
