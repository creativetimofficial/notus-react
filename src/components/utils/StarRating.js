import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <i class="fas fa-star text-2xl" style={{ color: "#f5df18" }} />
      );
    } else {
      stars.push(
        <i className="far fa-star text-2xl" style={{ color: "#f5df18" }} />
      );
    }
  }
  return <>{stars}</>;
};

export default StarRating;
