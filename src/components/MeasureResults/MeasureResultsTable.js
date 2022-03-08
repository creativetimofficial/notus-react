/* eslint-disable no-undef */
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import MeasureResultsRow from './MeasureResultsRow';

function generateMeasureRowValues(measureResult) {
  return {
    value: measureResult.measure,
    type: 'measure',
    included: measureResult.initialPopulation - measureResult.exclusions,
    eligible: measureResult.initialPopulation,
    numerator: measureResult.numerator,
    denominator: measureResult.denominator,
    exclusions: measureResult.exclusions,
  }
}

function MeasureResultsTable({ currentResults, handleMeasureChange }) {
  return (
    <Grid container direction="column" spacing={0.25}>
      <Grid container item justifyContent="space-evenly" direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
        <Grid item xs={1}>
          <Typography>
            Measure
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Included
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Eligible Population
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Numerator
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Denominator
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Exclusions
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>
            View
          </Typography>
        </Grid>
      </Grid>
      {currentResults.map((item) => (
        <Grid
          item
          sx={{ width: '100%' }}
          key={`chart-container-grid-measure-${item.measure}`}
        >
          <MeasureResultsRow
            measureResult={generateMeasureRowValues(item)}
            handleMeasureChange={handleMeasureChange}
          />
        </Grid>
      ))}
      <Divider color="black" />
    </Grid>
  )
}

MeasureResultsTable.propTypes = {
  currentResults: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
  handleMeasureChange: PropTypes.func,
};

MeasureResultsTable.defaultProps = {
  currentResults: [],
  handleMeasureChange: () => undefined,
}

export default MeasureResultsTable;
