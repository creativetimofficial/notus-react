import { ThemeProvider } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import {
  Box, Button, Drawer, Grid, Slider, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import theme from '../../assets/styles/AppTheme';
import FilterDrawerItem from './FilterDrawerItem';
import filterDrawerItemData from './FilterDrawerItemData';

function FilterDrawer({
  currentFilters,
  setCurrentFilters,
  filterDrawerOpen,
  toggleFilterDrawer,
}) {
  const [percentSliderValue, setPercentSliderValue] = useState([25, 75])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggleFilterDrawer(open);
  };

  const handleSliderChange = (event, newValue) => {
    setPercentSliderValue(newValue);
  };

  const sliderValuetext = (value) => `${value}%`;

  // Gotta figure something in here to deal with the filter application
  const list = () => ( // anchor was here
    <ThemeProvider theme={theme}>
      <Box
        sx={{ px: '50px' }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Typography sx={{ my: '20px' }} color="black.dark" variant="h6">Filters</Typography>
          </Grid>
          <Grid item>
            <CloseIcon size="large" sx={{ m: '10px', mr: '20px' }} color="black" onClick={toggleDrawer(false)} />
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid container item direction="column" sx={{ mt: '10px' }}>
            <FilterDrawerItem filterItem={filterDrawerItemData.domainsOfCare} />
            <Grid container item sx={{ mt: '10px' }} spacing={1} direction="row">
              <Grid item>
                <Typography color="black.dark" variant="body1">Percent Range:</Typography>
              </Grid>
              <Grid item>
                <HelpIcon className="filter-drawer__help" />
              </Grid>
            </Grid>
            <Grid item>
              <Box sx={{ minwidth: '150px', ml: '10px' }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={percentSliderValue}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={sliderValuetext}
                  sx={{ color: 'blue.dark', width: '80%' }}
                />
              </Box>
            </Grid>
          </Grid>
          <FilterDrawerItem filterItem={filterDrawerItemData.starRating} />
          <Grid sx={{ mt: '30px' }} container justifyContent="space-evenly" alignItems="center" direction="row">
            <Grid item>
              <Button sx={{ borderRadius: '5px' }} onClick={toggleDrawer(false)} color="blue" variant="outlined">Cancel</Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderRadius: '5px' }}
                color="blue"
                variant="contained"
                onChange={() => setCurrentFilters}
              >
                Apply Filters
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );

  return (
    <Drawer
      anchor="right"
      open={filterDrawerOpen}
      onClose={toggleDrawer(false)}
    >
      {list()}
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
  toggleFilterDrawer: () => undefined,
  setCurrentFilters: () => undefined,
}

export default FilterDrawer;
