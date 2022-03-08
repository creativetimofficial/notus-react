/* eslint-disable no-undef */
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { generateFilterPaneValues } from '../ChartContainer/ChartContainerUtil';
import MeasureResultsRow from './MeasureResultsRow';

function FilterTable({
  measureList, setCurrentFilters,
}) {
  const changeFilter = (event) => {
    console.log('called', event.target.checked);
    console.log('called', event.target.value);
  }

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
      {measureList.map((item) => (
        <Grid
          item
          sx={{ width: '100%' }}
          key={`chart-container-grid-measure-${item.measure}`}
        >
          <MeasureResultsRow
            filter={generateFilterPaneValues(item)}
            onChangeFilter={changeFilter}
          />
        </Grid>
      ))}
      <Divider color="black" />
    </Grid>
  )
}

FilterTable.propTypes = {
  measureList: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
  setCurrentFilters: PropTypes.func,
};

FilterTable.defaultProps = {
  measureList: [],
  setCurrentFilters: () => undefined,
}

export default FilterTable;
