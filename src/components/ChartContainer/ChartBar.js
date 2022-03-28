/* eslint-disable react/jsx-props-no-spreading */
import DateRangeIcon from '@mui/icons-material/DateRange';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import TuneIcon from '@mui/icons-material/Tune';
import { DesktopDateRangePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import {
  Badge, Button, Grid, Menu, TextField, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const filterMenuOpenContext = createContext(false);

function ChartBar({
  filterDrawerOpen, toggleFilterDrawer, filterSum, dateValue, changeDateValue, handleDateChange,
}) {
  const buttonStyling = {};

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const onClickFilter = () => {
    toggleFilterDrawer(!filterDrawerOpen);
  };

  const printDays = (position) => {
    if (dateValue && dateValue !== [null, null]) {
      if (dateValue[position] != null) {
        switch (position) {
          case 0:
            return moment(dateValue[0]).format('M/DD/YY');
          case 1:
            return moment(dateValue[1]).format('M/DD/YY');
          default:
            return null
        }
      } else {
        return null;
      }
    } else {
      return null
    }
  }

  const dateSelector = (newValue) => {
    changeDateValue(newValue);
    const dates = {
      startDate: newValue[0],
      endDate: newValue[1],
    }
    handleDateChange(dates);
  }

  const clearDate = () => {
    changeDateValue([null, null]);
    const dates = {
      startDate: null,
      endDate: null,
    }
    handleDateChange(dates);
  }

  return (
    <Box>
      <Grid container className="chart-bar" direction="row" justifyContent="flex-end" spacing={0.1}>
        <Grid item sx={buttonStyling}>
          <Button
            key="d3-YTD"
            color="black"
            onClick={handleClick}
            variant="text"
            startIcon={<DateRangeIcon />}
          >
            <Typography variant="caption">
              Timeline:
              {' '}
              {printDays(0)}
              {' - '}
              {printDays(1)}
            </Typography>
          </Button>
          {// This is where the fun begins
          }
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={null}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DesktopDateRangePicker
                startText="Start"
                value={dateValue}
                onChange={dateSelector}
                style={{ color: 'black' }}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField sx={{ ml: '10px' }} {...startProps} />
                    <Box sx={{ mx: 2, color: 'black' }}> to </Box>
                    <TextField sx={{ mr: '10px' }} {...endProps} />
                  </>
                )}
              />
            </LocalizationProvider>

            <Grid container justifyContent="center" sx={{ m: '10px', ml: '-10px' }}>
              <Grid item>
                <Button variant="contained" color="blue" onClick={clearDate}>
                  Clear Selection
                </Button>
              </Grid>
            </Grid>
          </Menu>
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
          <Badge badgeContent={filterSum} className="chart-bar__badge">
            <Button
              className="chart-bar__filter-button"
              color="black"
              variant="text"
              onClick={onClickFilter}
              startIcon={(
                <FilterAltIcon />
              )}
            >
              <Typography variant="caption">
                Filter
              </Typography>
            </Button>
          </Badge>
        </Grid>
      </Grid>
    </Box>
  )
}

ChartBar.propTypes = {
  filterDrawerOpen: PropTypes.bool,
  toggleFilterDrawer: PropTypes.func,
  filterSum: PropTypes.number,
  // Necessary for DateRangePicker to function and pass props
  // eslint-disable-next-line react/forbid-prop-types
  dateValue: PropTypes.array,
  changeDateValue: PropTypes.func,
  handleDateChange: PropTypes.func,
};

ChartBar.defaultProps = {
  filterDrawerOpen: false,
  toggleFilterDrawer: undefined,
  filterSum: 0,
  dateValue: [null, null],
  changeDateValue: undefined,
  handleDateChange: undefined,
}

export default ChartBar;
