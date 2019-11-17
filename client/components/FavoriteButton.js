import React from 'react';
import MdHeart from 'react-ionicons/lib/MdHeart';

const FavoriteButton = ({ toggleFavorite, isFavorite, gif }) => {
  return (
    <button
      name="favorite-toggle"
      type="button"
      className="btn-heart"
      onClick={() => toggleFavorite(gif)}
    >
      <MdHeart fontSize="25px" color={isFavorite(gif) ? 'red' : 'black'} />
    </button>
  );
};

export default FavoriteButton;
