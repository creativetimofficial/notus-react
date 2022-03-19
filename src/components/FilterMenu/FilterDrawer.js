import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import ToolTip from '@mui/material/Tooltip';
import {
  Box, Button, Drawer, Grid, Slider, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterDrawerItem from './FilterDrawerItem';
import filterDrawerItemData from './FilterDrawerItemData';

const sliderTip = 'Selects the range of compliance.';

function FilterDrawer({
  currentFilters,
  handleFilterChange,
  filterDrawerOpen,
  toggleFilterDrawer,
}) {
  // TODO: James, set these states based on the currentFilters.
  // TODO: Then pass the values down to the items so they know to be checked.
  const [percentSliderValue, setPercentSliderValue] = useState(currentFilters.percentRange);
  const [starChoices, setStarChoices] = useState(currentFilters.stars);
  const [domainOfCareChoices, setDomainOfCareChoices] = useState(currentFilters.domainsOfCare);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
      setDomainOfCareChoices(domainOfCareChoices.filter((doc) => doc !== event.target.value));
    }
  }

  // https://mui.com/components/slider/#minimum-distance
  const handleSliderChange = (event, newValue) => {
    setPercentSliderValue(newValue);
  };

  const handleApplyFilter = () => {
    const filterOptions = {
      domainsOfCare: domainOfCareChoices,
      stars: starChoices,
      percentRange: percentSliderValue,
    };
    filterOptions.sum = filterDrawerItemData.sumCalculator(filterOptions);
    handleFilterChange(filterOptions);
    toggleFilterDrawer(false);
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
        <Grid container className="filter-drawer__refine-panel">
          Refine by:
        </Grid>
        <Grid container item className="filter-drawer__options-panel">
          <FilterDrawerItem
            filterItem={filterDrawerItemData.domainsOfCare}
            filterAction={handleDomainOfCareChange}
            currentFilter={currentFilters.domainsOfCare}
          />
          <Grid container item className="filter-drawer__slider-panel">
            <Grid item className="filter-drawer__slider-title">
              <Typography className="filter-drawer__slider-label" variant="body1">Percent Range:</Typography>
            </Grid>
            <Grid item className="filter-drawer__help-panel">
              <ToolTip title={sliderTip}>
                <HelpIcon className="filter-drawer__help" />
              </ToolTip>
            </Grid>
          </Grid>
          <Grid item className="filter-drawer__slider-body">
            <Slider
              getAriaLabel={() => 'Measurement percentage range'}
              defaultValue={currentFilters.percentRange}
              value={percentSliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="on"
              getAriaValueText={sliderValuetext}
              className="filter-drawer__slider"
              marks={filterDrawerItemData.percentMarks}
              disableSwap
            />
          </Grid>
          <FilterDrawerItem
            filterItem={filterDrawerItemData.starRating}
            filterAction={handleStarChange}
            currentFilter={currentFilters.stars}
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
                onClick={handleApplyFilter}
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
  currentFilters: PropTypes.shape({
    domainsOfCare: PropTypes.arrayOf(PropTypes.string),
    stars: PropTypes.arrayOf(PropTypes.string),
    percentRange: PropTypes.arrayOf(PropTypes.number),
  }),
  toggleFilterDrawer: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

FilterDrawer.defaultProps = {
  filterDrawerOpen: false,
  currentFilters: {},
  toggleFilterDrawer: undefined,
  handleFilterChange: undefined,
}

export default FilterDrawer;
