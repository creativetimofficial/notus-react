import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import {
  Box, Button, Drawer, Grid, Slider, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterDrawerItem from './FilterDrawerItem';
import filterDrawerItemData from './FilterDrawerItemData';

function FilterDrawer({
  currentFilters,
  setCurrentFilters,
  filterDrawerOpen,
  toggleFilterDrawer,
}) {
  const [percentSliderValue, setPercentSliderValue] = useState([0, 100]);
  const [starChoices, setStarChoices] = useState([]);
  const [domainOfCareChoices, setDomainOfCareChoices] = useState([]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggleFilterDrawer(open);
  };

  const handleStarChange = (event) => {
    if (event.target.checked) {
      setStarChoices(starChoices.concat(event.target.value));
    } else {
      setStarChoices(starChoices.filter((star) => star !== event.target.value));
    }
  }

  const handleDomainOfCareChange = (event) => {
    if (event.target.checked) {
      setDomainOfCareChoices(domainOfCareChoices.concat(event.target.value));
    } else {
      setDomainOfCareChoices(domainOfCareChoices.filter((star) => star !== event.target.value));
    }
  }

  const handleSliderChange = (event, newValue) => {
    setPercentSliderValue(newValue);
  };

  const handleApplyFilter = () => {
    setCurrentFilters({
      domainOfCare: domainOfCareChoices,
      stars: starChoices,
      percentRange: percentSliderValue,
    });
  }

  const sliderValuetext = (value) => `${value}%`;

  return (
    <Drawer
      anchor="right"
      open={filterDrawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box
        className="filter-drawer"
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <Grid container className="filter-drawer__title-panel">
          <Grid item>
            <Typography className="filter-drawer__title" variant="h6">Filters</Typography>
          </Grid>
          <Grid item className="filter-drawer__close-icon-panel">
            <CloseIcon className="filter-drawer__close-icon" onClick={toggleDrawer(false)} />
          </Grid>
        </Grid>
        <Grid container item className="filter-drawer__options-panel">
          <FilterDrawerItem
            filterItem={filterDrawerItemData.domainsOfCare}
            filterAction={handleDomainOfCareChange}
          />
          <Grid container item className="filter-drawer__slider-panel">
            <Grid item className="filter-drawer__slider-title">
              <Typography className="filter-drawer__slider-label" variant="body1">Percent Range:</Typography>
            </Grid>
            <Grid item className="filter-drawer__help-panel">
              <HelpIcon className="filter-drawer__help" />
            </Grid>
          </Grid>
          <Grid item className="filter-drawer__slider-body">
            <Slider
              getAriaLabel={() => 'Measurement percentage range'}
              value={percentSliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={sliderValuetext}
              className="filter-drawer__slider"
              disableSwap
            />
          </Grid>
          <FilterDrawerItem
            filterItem={filterDrawerItemData.starRating}
            filterAction={handleStarChange}
          />
          <Grid container className="filter-drawer__button-control-panel">
            <Grid item className="filter-drawer__button-panel">
              <Button
                className="filter-drawer__cancel-button"
                onClick={toggleDrawer(false)}
                variant="outlined"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item className="filter-drawer__button-panel">
              <Button
                className="filter-drawer__apply-button"
                variant="contained"
                onChange={handleApplyFilter}
              >
                Apply Filters
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}

FilterDrawer.propTypes = {
  filterDrawerOpen: PropTypes.bool,
  currentFilters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }),
  ),
  toggleFilterDrawer: PropTypes.func,
  setCurrentFilters: PropTypes.func,
};

FilterDrawer.defaultProps = {
  filterDrawerOpen: false,
  currentFilters: [],
  toggleFilterDrawer: undefined,
  setCurrentFilters: undefined,
}

export default FilterDrawer;
