import { ThemeProvider } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import {
  Box, Button, Divider, Drawer, Grid, Slider, Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import theme from '../../assets/styles/AppTheme';
import { filterMenuOpenContext } from '../D3Container/ChartBar';
import { currentFilterContext, displayDataContext, firstRenderContext } from '../D3Container/ChartContainer';
import FilterDrawerItem from './FilterDrawerItem';
import filterDrawerItemArray from './FilterDrawerItemData';

function FilterDrawer() {
  const { currentFilters, setCurrentFilters } = useContext(currentFilterContext);
  const { displayData, setDisplayData } = useContext(displayDataContext)
  const { firstRender, setFirstRender } = useContext(firstRenderContext);
  const { filterMenuOpen, setFilterMenuOpen } = useContext(filterMenuOpenContext);
  const [percentSliderValue, setPercentSliderValue] = useState([25, 75])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setFilterMenuOpen(open);
  };

  const handleSliderChange = (event, newValue) => {
    setPercentSliderValue(newValue);
  };

  function sliderValuetext(value) {
    return `${value}` + '%';
  }

  // Gotta figure something in here to deal with the filter application

  const list = (anchor) => (
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
          <Grid container item direction="column">
            <Grid item>
              <Typography color="black.dark" variant="body1">Active Filters:</Typography>
            </Grid>
            <Grid container item justifyContent="flex-start" alignItems="center" sx={{ minHeight: '70px' }}>
              {currentFilters.length === 0
                ? <Typography color="black.dark" variant="caption">No filters selected</Typography>
                : currentFilters.map((filter) => (
                  <Button sx={{ borderRadius: '10px', m: '5px' }} color="blue" variant="contained">
                    <Grid container direction="column" spacing={0} justifyContent="center" align="center">
                      <Grid item>
                        <Typography variant="caption" sx={{ fontSize: '0.5rem' }}>
                          {filter.type}
                          :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="button" sx={{ fontSize: '0.75rem' }}>{filter.value}</Typography>
                      </Grid>
                    </Grid>
                  </Button>
                ))}
            </Grid>
            <Grid item sx={{ width: '80%' }}>
              <Divider color="black" sx={{ width: '100%' }} />
            </Grid>
            <Grid container item direction="column" sx={{ mt: '10px' }}>
              <Grid container item spacing={1} direction="row">
                <Grid item>
                  <Typography color="black.dark" variant="body1">Percent Range:</Typography>
                </Grid>
                <Grid item>
                  <HelpIcon size="small" sx={{ p: '4px' }} color="gray" />
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
            {filterDrawerItemArray.map((drawerItem) => (
              <FilterDrawerItem filterItem={drawerItem} />
            ))}
          </Grid>
          <Grid sx={{ my: '50px' }} container justifyContent="space-evenly" alignItems="center" direction="row">
            <Grid item>
              <Button sx={{ borderRadius: '5px' }} onClick={toggleDrawer(false)} color="blue" variant="outlined">Cancel</Button>
            </Grid>
            <Grid item>
              <Button sx={{ borderRadius: '5px' }} color="blue" variant="contained">Apply Filters</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );

  return (
    <Drawer
      anchor="right"
      open={filterMenuOpen}
      onClose={toggleDrawer(false)}
    >
      {list('right')}
    </Drawer>
  );
}

export default FilterDrawer;
