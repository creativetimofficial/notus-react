import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      <Rating
        defaultValue={rating}
        name="size-large"
        size="large"
        precision={0.5}
        fullClassName="star-rating__stars-filled"
        readOnly
      />
      <p className="star-rating__paragraph">
        (
        {rating}
        )
      </p>
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
}

StarRating.defaultProps = {
  rating: undefined,
}

export default StarRating;
