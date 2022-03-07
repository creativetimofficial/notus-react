import PropTypes from 'prop-types';

export const measureSubscore = PropTypes.shape({
  date: PropTypes.string,
  denominator: PropTypes.number,
  exclusions: PropTypes.number,
  initialPopulation: PropTypes.number,
  measure: PropTypes.string,
  numerator: PropTypes.number,
  value: PropTypes.number,
});

export const measureScore = PropTypes.shape({
  ...measureSubscore,
  subScores: PropTypes.arrayOf(PropTypes.shape(measureSubscore)),
  _id: PropTypes.string,
});

export const measureScores = PropTypes.arrayOf(measureScore);
