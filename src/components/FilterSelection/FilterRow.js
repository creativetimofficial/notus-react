import {
  Checkbox, Divider, FormGroup, Grid, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

function FilterRow({ filter, onChangeFilter }) {
  return (
    <Box>
      <Divider color="black" />
      <Grid container justifyContent="space-evenly" direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
        <Grid item xs={1}>
          <Typography variant="caption">
            {filter.value}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {filter.included}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {filter.eligible}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {filter.numerator}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {filter.denominator}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            {filter.exclusions}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <FormGroup sx={{ ml: '8px' }}>
            <Checkbox
              disableRipple
              defaultChecked
              size="medium"
              color="primary"
              onChange={() => onChangeFilter(filter)}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  )
}

FilterRow.propTypes = {
  filter: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string,
    included: PropTypes.number,
    eligible: PropTypes.number,
    numerator: PropTypes.number,
    denominator: PropTypes.number,
    exclusions: PropTypes.number,
  }),
  onChangeFilter: PropTypes.func,
}

FilterRow.defaultProps = {
  filter: {},
  onChangeFilter: () => undefined,
}

export default FilterRow;
