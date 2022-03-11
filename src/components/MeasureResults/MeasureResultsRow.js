import {
  Checkbox, Divider, FormGroup, Grid, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

function MeasureResultsRow({ measureResult, handleMeasureChange }) {
  return (
    <Box>
      <Divider color="black" />
      <Grid container justifyContent="space-evenly" direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
        <Grid item xs={1}>
          <Typography variant="caption">
            {measureResult.label}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {measureResult.included}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {measureResult.eligible}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {measureResult.numerator}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {measureResult.denominator}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {measureResult.exclusions}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <FormGroup sx={{ ml: '8px' }}>
            <Checkbox
              disableRipple
              defaultChecked
              size="medium"
              color="primary"
              value={measureResult.value}
              onChange={(event) => handleMeasureChange(event)}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  )
}

MeasureResultsRow.propTypes = {
  measureResult: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    included: PropTypes.number,
    eligible: PropTypes.number,
    numerator: PropTypes.number,
    denominator: PropTypes.number,
    exclusions: PropTypes.number,
  }),
  handleMeasureChange: PropTypes.func,
}

MeasureResultsRow.defaultProps = {
  measureResult: {},
  handleMeasureChange: () => undefined,
}

export default MeasureResultsRow;
