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
    <Grid container item className="filter-drawer-item">
      <Grid container item className="filter-drawer-item__section">
        <Grid item className="filter-drawer-item__row">
          <Typography className="filter-drawer-item__label" variant="body1">
            {filterItemName}
            :
            {' '}
          </Typography>
        </Grid>
        <Grid item className="filter-drawer-item__row">
          <Tooltip title={filterItemText}>
            <HelpIcon className="filter-drawer-item__help" />
          </Tooltip>
        </Grid>
      </Grid>
      <FormGroup className="filter-drawer-item__options">
        {filterDrawerOptions.map((option) => (
          <FormControlLabel
            key={`filter-drawer-item-option-${option}`}
            componentsProps={{ typography: { className: 'filter-drawer-item__option-label' } }}
            control={
              <Checkbox className="filter-drawer-item__option-checkbox" />
            }
            label={option}
          />
        ))}
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
