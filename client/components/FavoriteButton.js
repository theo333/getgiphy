import React from 'react';
import MdHeart from 'react-ionicons/lib/MdHeart';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';

const FavoriteButton = ({ toggleFavorite, isFavorite, gif, buttonTitle }) => {
  return (
    <button
      name="favorite-toggle"
      type="button"
      title={buttonTitle}
      className="card__img__btn"
      onClick={() => toggleFavorite(gif)}
    >
      {isFavorite(gif) ? (
        <MdHeart fontSize="35px" color="red" />
      ) : (
        <MdHeartOutline fontSize="35px" color="red" />
      )}
    </button>
  );
};

export default FavoriteButton;
