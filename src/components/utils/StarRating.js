import React, { useState } from "react";
import { Rating } from "@mui/material";

function StarRating({ rating }) {
  return (
    <div className="flex justify-center">
      <Rating
        defaultValue={rating}
        name="size-large"
        size="large"
        precision={0.5}
        readOnly
      />
      <p className="ml-2 text-xl">({rating})</p>
    </div>
  );
}
export default StarRating;
