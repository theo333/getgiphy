/*eslint-disable camelcase*/
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Cards from './Cards';

const Favorites = () => {
  const buttonTitle = 'Remove from favorites';
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Save Your Favorite Gifs | GetGiphy</title>
        <meta
          name="description"
          content="Save your favorite Gifs from GIPHY. They have the most popular and latest GIFs and Animated Stickers online."
        />
      </Helmet>
      {/* <div className="Content__header text-center"> */}
      <h1 className="text-center">My Giphy Favorites</h1>
      <Cards buttonTitle={buttonTitle} />
      {/* </div> */}
    </Fragment>
  );
};

export default Favorites;
