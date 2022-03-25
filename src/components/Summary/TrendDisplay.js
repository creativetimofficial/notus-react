import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography,
} from '@mui/material';

function TrendDisplay({ trend, percentWidth }) {
  let panelClass = 'trend-display--hide';
  if (percentWidth === 25) {
    panelClass = 'trend-display--width-25';
  } else if (percentWidth === 50) {
    panelClass = 'trend-display--width-50';
  }

  let trendClass = '';
  let trendValue = 'N/A';
  if (trend.percentChange !== undefined) {
    if (trend.percentChange >= 0) {
      trendClass = 'trend-display__percent-change--positive';
      trendValue = `+${trend.percentChange} %`
    } else {
      trendClass = 'trend-display__percent-change--negative';
      trendValue = `-${Math.abs(trend.percentChange)} %`
    }
  }

  return (
    <Grid className={`trend-display ${panelClass}`}>
      <Typography variant="h3" className="trend-display__h3-header">
        {`${trend.measure} % Compliance`}
      </Typography>
      <Typography className={`trend-display__percent-change ${trendClass}`}>
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
