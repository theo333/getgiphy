import React from 'react';
import MdHeart from 'react-ionicons/lib/MdHeart';

const FavoriteButton = ({ toggleFavorite, isFavorite, gif, buttonTitle }) => {
  return (
    <button
      name="favorite-toggle"
      type="button"
      aria-label={buttonTitle}
      className="card__img__btn"
      onClick={() => toggleFavorite(gif)}
    >
      <MdHeart fontSize="35px" className={isFavorite(gif) ? 'fav-heart' : 'nofav-heart'} />
    </button>
  );
};

export default FavoriteButton;
