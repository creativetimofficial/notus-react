import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '@mui/icons-material/Help';
import ToolTip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';

const starsTip = 'Star rating subject to change depending on measures and other resources. For more information, please contact NCQA.';

function RatingTrends({ activeMeasure }) {
  return (
    <div className="rating-trends">
      <h2 className="rating-trends__h2-header">
        Ratings & Trends
      </h2>
      <p className="rating-trends__summary">
        Descriptive text about this section and impacts and events that
        contribute to star rating ...
      </p>
      <div className="rating-trends__display-box">
        <div className="rating-trends__panel-box">
          <div className="rating-trends__panel">
            <div className="rating-trends__header-align">
              <h3 className="rating-trends__h3-header">
                Star Rating
              </h3>
              <ToolTip title={starsTip}>
                <HelpIcon className="rating-trends__help" />
              </ToolTip>
            </div>
            <Rating
              className="rating-trends__star-rating"
              name="read-only"
              value={activeMeasure.starRating || 0}
              precision={0.5}
              readOnly
            />
            <p className="rating-trends__star-rating-label">
              {activeMeasure.label && `(${activeMeasure.label})`}
            </p>
          </div>
          <div className="rating-trends__border" />
          <div className="rating-trends__panel">
            <h3 className="rating-trends__h3-header">
              Measure % Compliance
            </h3>
            <p className="rating-trends__coming-soon">
              Coming soon.
            </p>
          </div>
          <div className="rating-trends__border" />
          <div className="rating-trends__panel">
            <h3 className="rating-trends__h3-header">
              Measure % Compliance
            </h3>
            <p className="rating-trends__coming-soon">
              Coming soon.
            </p>
          </div>
          <div className="rating-trends__border" />
          <div className="rating-trends__panel">
            <h3 className="rating-trends__h3-header">
              Projected Yearly Bonus per Plan
            </h3>
            <p className="rating-trends__coming-soon">
              Coming soon.
            </p>
          </div>
        </div>
        <div className="rating-trends__button-panel">
          <button
            type="button"
            className="rating-trends__view-rating-details-button"
          >
            View Rating Details
          </button>
        </div>
      </div>
    </div>
  );
}

RatingTrends.propTypes = {
  activeMeasure: PropTypes.shape({
    starRating: PropTypes.number,
    label: PropTypes.string,
  }),
}

RatingTrends.defaultProps = {
  activeMeasure: {
    starRating: 0,
    label: '',
  },
}

export default RatingTrends;
