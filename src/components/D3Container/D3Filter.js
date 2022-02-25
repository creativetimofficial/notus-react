import {
  Checkbox, Divider, FormGroup, Grid, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function D3Filter(props) {
  const { filter } = props;
  const onChange = props.changeFunction;

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
            <Checkbox disableRipple defaultChecked size="medium" color="blue" onChange={() => onChange(filter)} />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  )
}

export default D3Filter;
