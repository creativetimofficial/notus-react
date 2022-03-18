import HelpIcon from '@mui/icons-material/Help';
import {
  Checkbox, FormControlLabel, FormGroup, Grid, Tooltip, Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function FilterDrawerItem({ filterItem, filterAction }) {
  return (
    <Grid container item className="filter-drawer-item">
      <Grid container item className="filter-drawer-item__section">
        <Grid item className="filter-drawer-item__row">
          <Typography className="filter-drawer-item__label" variant="body1">
            {filterItem.name}
            :
            {' '}
          </Typography>
        </Grid>
        <Grid item className="filter-drawer-item__row">
          <Tooltip title={filterItem.text}>
            <HelpIcon className="filter-drawer-item__help" />
          </Tooltip>
        </Grid>
      </Grid>
      <FormGroup className="filter-drawer-item__options">
        {filterItem.options.map((option, index) => (
          <FormControlLabel
            key={`filter-drawer-item-option-${option}`}
            componentsProps={{ typography: { className: 'filter-drawer-item__option-label' } }}
            control={(
              <Checkbox
                value={filterItem.values[index]}
                className="filter-drawer-item__option-checkbox"
                onChange={filterAction}
              />
            )}
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
    values: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ),
    options: PropTypes.arrayOf(PropTypes.string),
  }),
  filterAction: PropTypes.func,
}

FilterDrawerItem.defaultProps = {
  filterItem: {
    name: '',
    text: '',
    options: [],
    values: [],
  },
  filterAction: undefined,
}

export default FilterDrawerItem;
