import {
  Grid, Paper, Tab, Tabs,
} from '@mui/material';
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { DatastoreContext } from '../../context/DatastoreProvider';
import ChartBar from './ChartBar';
import D3Chart from './D3Chart';
// import D3IndicatorByLineChart from './D3IndicatorByLintChart';
import TabPanel from '../Common/TabPanel';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import FilterSelect from '../FilterSelection/FilterSelect'

export const firstRenderContext = createContext(true)

function D3Container({ dashboardState, dashboardActions }) {
  const { datastore } = useContext(DatastoreContext);
  const [displayData, setDisplayData] = useState(datastore.results);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [byLineMeasure, setByLineMeasure] = useState('');
  const [byLineDisplayData, setByLineDisplayData] = useState([]);
  // const [byLineDisplayData, setByLineDisplayData] = useState('');

  const handleTabChange = (event, index) => {
    setTabValue(index); // Not sure if this is correct.
    setByLineMeasure(event.target.value);
    const filteredDisplayData = datastore.results.filter(
      (item) => item.measure === event.target.value,
    );
    setByLineDisplayData(filteredDisplayData);
  }

  const workingList = {};
  datastore.results.forEach((item) => {
    if (workingList[item.measure] === undefined
      || item.date > workingList[item.measure].date) {
      workingList[item.measure] = item;
    }
  });
  const measureList = Object.values(workingList);

  useEffect(() => {
    setDisplayData(datastore.results);
  }, [datastore]);

  const changeFilter = (filter) => {
    const filterArray = [...currentFilters];
    // Will need to be adjusted once model data is available.
    const active = filterArray.find((item) => item.type === 'measure' && item.value === filter.value);
    if (active !== undefined) {
      const newFilterArray = filterArray.filter((item) => item.value !== filter.value);
      setCurrentFilters(newFilterArray);
      setDisplayData(refineDisplayData([...datastore.results], newFilterArray));
    } else {
      const newFilter = {
        value: filter.value,
        type: 'measure',
      }
      filterArray.push(newFilter);
      setCurrentFilters(filterArray);
      setDisplayData(refineDisplayData([...datastore.results], filterArray));
    }
  }

  const refineDisplayData = (data, filters) => {
    const initialData = data;
    let workingData = [];
    const filterArray = filters;
    if (filterArray.length === 0) {
      workingData = initialData;
    } else if (filterArray.length === measureList.length) {
      workingData = [];
    } else {
      workingData = initialData;
      filterArray.forEach((filterItem) => {
        // Handles Filtering by measure
        if (filterItem.type === 'measure') {
          workingData.forEach((item, index, object) => {
            if (item.measure === filterItem.value) {
              object.splice(index, 1);
            }
          });
        }
        // TODO: Add logic in here for various filter types
      })
    }
    return workingData;
  }

  return (
    <div>
      <FilterDrawer
        filterMenuOpen={dashboardState.filterMenuOpen}
        toggleFilterMenu={dashboardActions.toggleFilterMenu}
        currentFilters={currentFilters}
        setCurrentFilters={setCurrentFilters}
      />
      <Tabs
        value={tabValue}
        onChange={(event, index) => handleTabChange(event, index)}
        indicatorColor="primary"
      >
        <Tab label="All Measures" />
        <Tab label="Measure by Line" />
      </Tabs>
      <TabPanel value={tabValue} index={1}>
        <Paper>
          <Grid container>
            <Grid item sx={{ width: '25%' }}>
              {/* <IndicatorByLineSelector /> */}
            </Grid>
          </Grid>
          {/* <D3IndicatorByLineChart /> */}
        </Paper>
      </TabPanel>
      <TabPanel value={tabValue} index={0}>
        <Grid container justifyContent="space-evenly" direction="column">
          <Grid sx={{ mb: '-30px' }} item>
            <ChartBar
              filterMenuOpen={dashboardState.filterMenuOpen}
              toggleFilterMenu={dashboardActions.toggleFilterMenu}
            />
          </Grid>
          <Grid item>
            <D3Chart displayData={displayData} />
          </Grid>
        </Grid>
        <FilterSelect />
      </TabPanel>
    </div>
  )
}

D3Container.propTypes = {
  dashboardState: PropTypes.shape({
    filterMenuOpen: PropTypes.bool,
  }),
  dashboardActions: PropTypes.shape({
    toggleFilterMenu: PropTypes.func,
  }),
};

D3Container.defaultProps = {
  dashboardState: {
    filterMenuOpen: false,
  },
  dashboardActions: {},
}

export default D3Container;
