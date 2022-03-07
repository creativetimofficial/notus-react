import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function CardTrends({ trends }) {
  const percentChange = trends[0] ? trends[0].changePercent : 0;
  const measure = trends[0] ? trends[0].measure : '';
  const displayValue = `${measure} : ${percentChange}`
  return (
    <>
      <Typography variant="subtitle1" align="center">Impacts and Trends</Typography>
      <Typography>
        {displayValue}
      </Typography>
    </>
  );
}

CardTrends.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      changePercent: PropTypes.number,
      measure: PropTypes.string,
    }),
  ),
}

CardTrends.defaultProps = {
  trends: [{
    changePercent: 0.0,
    measure: 'none',
  }],
}
