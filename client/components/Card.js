import React from 'react';
import FavoriteButton from './FavoriteButton';

const Card = ({ gif, toggleFavorite, isFavorite, buttonTitle }) => {
  const {
    title,
    images: {
      fixed_height_still: { url },
    },
  } = gif;

  return (
    <div className="Cards__card">
      <img src={url} alt={title} title={title} className="card__img" />
      <FavoriteButton
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        gif={gif}
        buttonTitle={buttonTitle}
      />
      <div className="card__info">{title}</div>
    </div>
  );
};

export default Card;
