import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="Siteheader">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search Giphy for Popular Gifs | GetGiphy</title>
        <meta
          name="description"
          content="Search GIPHY to find the most popular and latest GIFs and Animated Stickers online, including funny GIFs, reaction GIFs, unique GIFs and more."
        />
      </Helmet>
      <Link to="/">
        <span className="Siteheader__company-name_1">Get</span>
        <span className="Siteheader__company-name_2">Giphy</span>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
