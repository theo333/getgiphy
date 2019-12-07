/*eslint-disable no-nested-ternary*/
/*eslint-disable prettier/prettier*/
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
      <MdHeart
        className={
          isFavorite(gif) ? (gif.added ? 'fav-heart fav-added' : 'fav-heart') : 'nofav-heart'
        }
      />
    </button>
  );
};

export default FavoriteButton;
