import DateRangeIcon from '@mui/icons-material/DateRange';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import TuneIcon from '@mui/icons-material/Tune';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { createContext } from 'react';

export const filterMenuOpenContext = createContext(false);

function ChartBar({ filterDrawerOpen, toggleFilterDrawer }) {
  const buttonStyling = {};

  const onClickFilter = () => {
    toggleFilterDrawer(!filterDrawerOpen);
  };

  return (
    <Box>
      <Grid container direction="row" justifyContent="flex-end" spacing={0.1}>
        <Grid item sx={buttonStyling}>
          <Button disabled key="d3-YTD" color="black" variant="text" startIcon={<DateRangeIcon />}>
            <Typography variant="caption">
              Timeline:
              {' '}
              {'Implement Me'}
            </Typography>
          </Button>
        </Grid>
        <Grid item sx={buttonStyling}>
          {
            process.env.REACT_APP_MVP_SETTING === 'false'
              && (
                <Button disabled key="d3-options" color="black" variant="text" startIcon={<TuneIcon />}>
                  <Typography variant="caption">
                    Options
                  </Typography>
                </Button>
              )
            }
        </Grid>
        <Grid item sx={buttonStyling}>
          {
            process.env.REACT_APP_MVP_SETTING === 'false'
            && (
              <Button disabled key="d3-export" color="black" variant="text" startIcon={<SimCardDownloadIcon />}>
                <Typography variant="caption">
                  Export
                </Typography>
              </Button>
            )
          }
        </Grid>
        <Grid item sx={buttonStyling}>
          <Button
            color="black"
            variant="text"
            onClick={onClickFilter}
            startIcon={<FilterAltIcon />}
          >
            <Typography variant="caption">
              Filter
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

ChartBar.propTypes = {
  filterDrawerOpen: PropTypes.bool,
  toggleFilterDrawer: PropTypes.func,
};

ChartBar.defaultProps = {
  filterDrawerOpen: false,
  toggleFilterDrawer: () => undefined,
}

export default ChartBar;
