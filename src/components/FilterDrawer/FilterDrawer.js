import { ThemeProvider } from '@emotion/react';
import { Box, Button, Checkbox, Divider, Drawer, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import { theme } from 'assets/styles/AppTheme';
import React, { useContext, useState } from 'react';
import { filterMenuOpenContext } from '../D3Container/ChartBar';
import { currentFilterContext, displayDataContext, firstRenderContext } from '../D3Container/D3Container';
import filterDrawerItemArray from './FilterDrawerItemData';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import FilterDrawerItem from './FilterDrawerItem';
import { CheckBox } from '@mui/icons-material';


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

    //Gotta figure something in here to deal with the filter application

    const list = (anchor) => (
        <ThemeProvider theme={theme} >
            <Box
                sx={{ px: '50px' }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
            >
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item>
                        <Typography sx={{ my: '20px' }} color='black.dark' variant='h6'>Filters</Typography>
                    </Grid>
                    <Grid item>
                        <CloseIcon size="large" sx={{ m: '10px', mr: '20px' }} color='black' onClick={toggleDrawer(false)} />
                    </Grid>
                </Grid>

                <Grid container direction="column">
                    <Grid container item direction="column">
                        <Grid item>
                            <Typography color='black.dark' variant='body1'>Active Filters:</Typography>
                        </Grid>
                        <Grid container item justifyContent="flex-start" alignItems="center" sx={{ minHeight: '70px' }}>
                            {currentFilters.length === 0 ?
                                <Typography color='black.dark' variant="caption">No filters selected</Typography>
                                :
                                currentFilters.map((filter) => {
                                    console.log(filter)
                                    return (
                                        <Button sx={{ borderRadius: '10px', m: '5px' }} color="blue" variant="contained">
                                            {filter}
                                        </Button>)
                                })
                            }
                        </Grid>
                        <Grid item sx={{ width: '80%' }}>
                            <Divider color="black" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid container item direction="column" sx={{ mt: '10px' }}>
                            <Grid container item spacing={1} direction="row">
                                <Grid item>
                                    <Typography color='black.dark' variant='body1'>Percent Range:</Typography>
                                </Grid>
                                <Grid item>
                                    <HelpIcon size='small' sx={{ p: '4px' }} color='gray' />
                                </Grid>
                            </Grid>
                            <Grid container item spacing={1}>
                                <Grid item>
                                    <CheckBox color='blue.dark' />
                                </Grid>
                                <Grid item>
                                    <Box sx={{ minwidth: '150px' }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={percentSliderValue}
                                            onChange={handleSliderChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={sliderValuetext}
                                            sx={{ color: "blue.dark", width: '80%' }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        {filterDrawerItemArray.map((drawerItem) => {
                            return (
                                <FilterDrawerItem filterItem={drawerItem} />
                            )
                        })}
                    </Grid>
                </Grid>
            </Box >
        </ThemeProvider>
    );


    return (
        <Drawer
            anchor={"right"}
            open={filterMenuOpen}
            onClose={toggleDrawer(false)}
        >
            {list("right")}
        </Drawer>
    );
}

export default FilterDrawer;

