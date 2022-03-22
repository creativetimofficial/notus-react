import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography,
} from '@mui/material';

function TrendDisplay({ trend, percentWidth }) {
  let panelClass = 'rating-trends__panel__hide';
  if (percentWidth === 25) {
    panelClass = 'rating-trends__panel__width-25';
  } else if (percentWidth === 50) {
    panelClass = 'rating-trends__panel__width-50';
  }

  const header = `${trend.measure} % Compliance`;
  let trendClass = '';
  let trendValue = 'N/A';
  if (trend.percentChange) {
    if (trend.percentChange >= 0) {
      trendClass = 'rating-trends__percent-change__positive';
      trendValue = `+ ${trend.percentChange} %`
    } else {
      trendClass = 'rating-trends__percent-change__negative';
      trendValue = `- ${Math.abs(trend.percentChange)} %`
    }
  }

  return (
    <Grid className={`rating-trends__panel ${panelClass}`}>
      <Typography variant="h3" className="rating-trends__h3-header">
        {header}
      </Typography>
      <Typography className={`rating-trends__percent-change ${trendClass}`}>
        { trendValue }
      </Typography>
      <Typography>
        (over the past week)
      </Typography>
    </Grid>
  )
}

TrendDisplay.propTypes = {
  trend: PropTypes.shape({
    measure: PropTypes.string,
    percentChange: PropTypes.number,
  }),
  percentWidth: PropTypes.number,
}

TrendDisplay.defaultProps = {
  trend: {
    measure: '',
  },
  percentWidth: 0,
}

export default TrendDisplay;
