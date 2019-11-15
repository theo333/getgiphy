import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>&copy; {year} GetGiphy</footer>;
};

export default Footer;
