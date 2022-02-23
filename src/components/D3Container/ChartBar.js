import DateRangeIcon from '@mui/icons-material/DateRange';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import TuneIcon from '@mui/icons-material/Tune';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { createContext, useState } from 'react';
import FilterDrawer from '../FilterDrawer/FilterDrawer';

export const filterMenuOpenContext = createContext(false);

function ChartBar() {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const buttonStyling = {
  }

  const onclickFilter = () => {
    if (filterMenuOpen) {
      setFilterMenuOpen(false);
    } else {
      setFilterMenuOpen(true);
    }
  }

  return (
    <Box>
      <filterMenuOpenContext.Provider value={{ filterMenuOpen, setFilterMenuOpen }}>
        <FilterDrawer />
      </filterMenuOpenContext.Provider>
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
          <Button disabled key="d3-options" color="black" variant="text" startIcon={<TuneIcon />}>
            <Typography variant="caption">
              Options
            </Typography>
          </Button>
        </Grid>
        <Grid item sx={buttonStyling}>
          <Button disabled key="d3-export" color="black" variant="text" startIcon={<SimCardDownloadIcon />}>
            <Typography variant="caption">
              Export
            </Typography>
          </Button>
        </Grid>
        <Grid item sx={buttonStyling}>
          <Button key="d3-graph-filters" color="black" variant="text" onClick={onclickFilter} startIcon={<FilterAltIcon />}>
            <Typography variant="caption">
              Filter
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChartBar;
