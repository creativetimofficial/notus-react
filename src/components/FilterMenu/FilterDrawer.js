import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel'
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
  const [percentSliderValue, setPercentSliderValue] = useState(
    Array.from(currentFilters.percentRange),
  );
  const [starChoices, setStarChoices] = useState(Array.from(currentFilters.stars));
  const [domainOfCareChoices, setDomainOfCareChoices] = useState(
    Array.from(currentFilters.domainsOfCare),
  );

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    toggleFilterDrawer(open);
  };

  const handleResetFilter = () => {
    handleFilterChange({
      domainsOfCare: [],
      stars: [],
      percentRange: [0, 100],
      sum: 0,
    });
    setStarChoices([]);
    setDomainOfCareChoices([]);
    setPercentSliderValue([0, 100]);
    toggleFilterDrawer(false);
  }

  const handleStarChange = (event) => {
    if (event.target.checked) {
      setStarChoices(starChoices.concat(parseInt(event.target.value, 10)));
    } else {
      setStarChoices(starChoices.filter((star) => (star !== parseInt(event.target.value, 10))));
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
        <Grid container className="filter-drawer__title-section">
          <Grid item>
            <Typography className="filter-drawer__title" variant="h6">Filters</Typography>
          </Grid>
          <Grid item className="filter-drawer__close-icon-panel">
            <CloseIcon className="filter-drawer__close-icon" onClick={toggleDrawer(false)} />
          </Grid>
        </Grid>
        <Grid container className="filter-drawer__refine-section">
          <Grid item className="filter-drawer__refine-label-panel">
            <Typography className="filter-drawer__refine-label" variant="body1">Refine by:</Typography>
          </Grid>
          <Grid item className="filter-drawer__refine-section">
            <Button
              className="filter-drawer__reset-button"
              variant="outlined"
              onClick={handleResetFilter}
            >
              Reset Filters
              <CancelIcon className="filter-drawer__cancel-icon" />
            </Button>
          </Grid>
        </Grid>
        <Grid container item className="filter-drawer__options-section">
          <FilterDrawerItem
            filterItem={filterDrawerItemData.domainsOfCare}
            filterAction={handleDomainOfCareChange}
            currentFilter={domainOfCareChoices}
          />
          <Grid container item className="filter-drawer__slider-section">
            <Grid item className="filter-drawer__slider-title">
              <Typography className="filter-drawer__slider-label" variant="body1">Percent Range:</Typography>
            </Grid>
            <Grid item className="filter-drawer__help-panel">
              <ToolTip title={sliderTip}>
                <HelpIcon className="filter-drawer__help-icon" />
              </ToolTip>
            </Grid>
          </Grid>
          <Grid item className="filter-drawer__slider-body">
            <Slider
              getAriaLabel={() => 'Measurement percentage range'}
              defaultValue={percentSliderValue}
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
            currentFilter={starChoices}
          />
          <Grid container className="filter-drawer__button-control-section">
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
    stars: PropTypes.arrayOf(PropTypes.number),
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
