import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '@mui/icons-material/Help';
import ToolTip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import {
  Button, Grid, Typography,
} from '@mui/material';

const starsTip = 'Star rating subject to change depending on measures and other resources. For more information, please contact NCQA.';

const displayMvp = (`${process.env.REACT_APP_MVP_SETTING}` === 'true') ? 'none' : 'flex';

function RatingTrends({ activeMeasure, trends, info }) {
  const mainTrend = { measure: '', percentChange: '' };
  const biggestGain = { measure: '', percentChange: '' };
  const biggestLoss = { measure: '', percentChange: '' };
  let sortedTrends = [];
  const measureTrend = trends
    .find((trend) => trend.measure === activeMeasure.measure);

  mainTrend.measure = info[activeMeasure.measure] !== undefined ? info[activeMeasure.measure].displayLabel : '';
  mainTrend.percentChange = measureTrend === undefined ? '' : measureTrend.percentChange;
  if (activeMeasure.measure === 'composite') {
    sortedTrends = trends
      .filter((trend) => trend.measure !== 'composite')
      .sort((a, b) => b.percentChange - a.percentChange);
  } else if (activeMeasure.measure) {
    sortedTrends = measureTrend.subScoreTrends
      .sort((a, b) => b.percentChange - a.percentChange);
  }

  if (sortedTrends.length > 1) {
    let { measure } = sortedTrends[0];
    biggestGain.measure = info[measure] !== undefined ? info[measure].displayLabel : measure;
    biggestGain.percentChange = sortedTrends[0].percentChange;

    measure = sortedTrends[sortedTrends.length - 1].measure;
    biggestLoss.measure = info[measure].displayLabel;
    biggestLoss.percentChange = sortedTrends[sortedTrends.length - 1].percentChange;

    return renderUI(activeMeasure, mainTrend, {
      displayAll: true, biggestGain, biggestLoss,
    });
  }

  return renderUI(activeMeasure, mainTrend, {
    displayAll: false, biggestGain, biggestLoss,
  });
}

const renderUI = (activeMeasure, mainTrend, renderOptions) => (
  <Box className="rating-trends">
    <Typography variant="h2" className="rating-trends__h2-header">
      Ratings & Trends
    </Typography>
    <Box className="rating-trends__display-box">
      <Box className="rating-trends__panel-box">
        <Grid className={`rating-trends__panel 
          ${renderOptions.displayAll ? 'rating-trends__panel__width-25' : 'rating-trends__panel__width-50'}`}
        >
          <Grid className="rating-trends__header-align">
            <Typography variant="h3" className="rating-trends__h3-header">
              Star Rating
            </Typography>
            <ToolTip title={starsTip}>
              <HelpIcon className="rating-trends__help" fontSize="small" />
            </ToolTip>
          </Grid>
          <Rating
            className="rating-trends__star-rating"
            name="read-only"
            value={activeMeasure.starRating || 0}
            precision={0.5}
            readOnly
          />
          <Typography className="rating-trends__star-rating-label">
            {activeMeasure.label && `(${activeMeasure.label})`}
          </Typography>
        </Grid>
        <Grid className={`rating-trends__panel 
          ${renderOptions.displayAll ? 'rating-trends__panel__width-25' : 'rating-trends__panel__width-50'}`}
        >
          <Typography variant="h3" className="rating-trends__h3-header">
            { mainTrend.measure }
            {' '}
            % Compliance
          </Typography>
          <Typography className={`rating-trends__percent-change ${mainTrend.percentChange >= 0
            ? 'rating-trends__percent-change__positive' : 'rating-trends__percent-change__negative'}`}
          >
            { mainTrend.percentChange }
            %
          </Typography>
          <Typography>
            (over the past week)
          </Typography>
        </Grid>
        <Grid className={`rating-trends__panel rating-trends__panel__width-25 
          ${renderOptions.displayAll ? '' : 'rating-trends__panel__hide'}`}
        >
          <Typography variant="h3" className="rating-trends__h3-header">
            { renderOptions.biggestGain.measure }
            {' '}
            % Compliance
          </Typography>
          <Typography className={`rating-trends__percent-change ${renderOptions.biggestGain.percentChange >= 0
            ? 'rating-trends__percent-change__positive' : 'rating-trends__percent-change__negative'}`}
          >
            { renderOptions.biggestGain.percentChange }
            %
          </Typography>

          <Typography>
            (over the past week)
          </Typography>
        </Grid>
        <Grid className={`rating-trends__panel rating-trends__panel__width-25 
          ${renderOptions.displayAll ? '' : 'rating-trends__panel__hide'}`}
        >
          <Typography variant="h3" className="rating-trends__h3-header">
            { renderOptions.biggestLoss.measure }
            {' '}
            % Compliance
          </Typography>
          <Typography className={`rating-trends__percent-change ${renderOptions.biggestLoss.percentChange >= 0
            ? 'rating-trends__percent-change__positive' : 'rating-trends__percent-change__negative'}`}
          >
            { renderOptions.biggestLoss.percentChange }
            %
          </Typography>
          <Typography>
            (over the past week)
          </Typography>
        </Grid>
      </Box>
      <Box className="rating-trends__button-panel" sx={{ display: displayMvp }}>
        <Button
          className="rating-trends__view-rating-details-button"
        >
          View Rating Details
        </Button>
      </Box>
    </Box>
  </Box>
);

RatingTrends.propTypes = {
  activeMeasure: PropTypes.shape({
    measure: PropTypes.string,
    starRating: PropTypes.number,
    label: PropTypes.string,
  }),
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
}

RatingTrends.defaultProps = {
  activeMeasure: {
    starRating: 0,
    label: '',
  },
  trends: [],
}

export default RatingTrends;
