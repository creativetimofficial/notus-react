import HelpIcon from '@mui/icons-material/Help';
import {
  Checkbox, FormControlLabel, FormGroup, Grid, Tooltip, Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function FilterDrawerItem({ filterItem }) {
  const filterItemName = filterItem.name;
  const filterItemText = filterItem.text;
  const filterDrawerOptions = filterItem.options;
  // const { filterFunction } = filterItem.filterFunction;

  return (
    <Grid container item direction="column" sx={{ mt: '10px' }}>
      <Grid container item spacing={1} direction="row">
        <Grid item>
          <Typography color="black.dark" variant="body1">
            {filterItemName}
            :
            {' '}
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title={filterItemText}>
            <HelpIcon size="small" sx={{ p: '4px' }} color="gray" />
          </Tooltip>
        </Grid>
      </Grid>
      <FormGroup sx={{ ml: '10px' }}>
        {filterDrawerOptions.map((option) => (<FormControlLabel componentsProps={{ typography: { color: 'black.dark', variant: 'caption' } }} control={<Checkbox size="small" color="blue" />} label={option} />))}
      </FormGroup>
    </Grid>
  )
}

FilterDrawerItem.propTypes = {
  filterItem: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    // filterFunction: PropTypes.func,
  }),
}

FilterDrawerItem.defaultProps = {
  filterItem: {
    name: '',
    text: '',
    options: [],
    // filterFunction: {},
  },
}

export default FilterDrawerItem;
