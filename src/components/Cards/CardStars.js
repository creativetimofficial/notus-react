import React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function CardStars() {
  return (
    <>
      <Typography variant="subtitle1" align="center">Star Rating</Typography>
      <Rating style={{ margin: 'auto' }} name="plan-rating" value={3.5} precision={0.5} readOnly />
    </>
  );
}
