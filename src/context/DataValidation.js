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

export const initialMeasureScores = [
  {
    date: 'T',
    denominator: 0,
    exclusions: 0,
    initialPopulation: 0,
    measure: 'xxx',
    numerator: 0,
    value: 0,
    subScores: [],
    _id: 'X',
  },
];
