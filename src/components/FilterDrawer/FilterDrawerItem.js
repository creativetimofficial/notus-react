import HelpIcon from '@mui/icons-material/Help';
import {
  Checkbox, FormControlLabel, FormGroup, Grid, Tooltip, Typography,
} from '@mui/material';
import React from 'react';

function FilterDrawerItem(props) {
  const filterItemName = props.filterItem.name;
  const filterItemText = props.filterItem.text;
  const filterDrawerOptions = props.filterItem.options;
  const { filterFunction } = props.filterItem;

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

export default FilterDrawerItem;
