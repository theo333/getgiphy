import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="Footer">
      <p>&copy; {year} GetGiphy</p>
    </footer>
  );
};

export default Footer;
