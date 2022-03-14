import PropTypes from 'prop-types';

export const storeProps = PropTypes.shape({
  results: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
  currentResults: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
});

export const dashboardStateProps = PropTypes.shape({
  filterDrawerOpen: PropTypes.bool,
});

export const dashboardActionsProps = PropTypes.shape({
  toggleFilterDrawer: PropTypes.func,
  setActiveMeasure: PropTypes.func,
});

export const colorMappingProps = PropTypes.arrayOf(
  PropTypes.shape({
    measure: PropTypes.string,
    color: PropTypes.string,
  }),
);
