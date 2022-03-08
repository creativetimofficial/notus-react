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
import FilterDrawer from '../FilterMenu/FilterDrawer';
import MeasureResultsTable from '../MeasureResults/MeasureResultsTable';

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

  useEffect(() => {
    setDisplayData(datastore.results);
  }, [datastore]);

  const handleMeasureChange = (event) => {
    if (event.target.checked) {
      const newDisplayData = displayData.slice()
        .concat(datastore.results.filter(
          (result) => result.measure === event.target.value,
        ));
      setDisplayData(newDisplayData);
    } else {
      setDisplayData(datastore.results.filter((result) => result.measure !== event.target.value));
    }
  };

  // const handleChange = (event, newValue) => {
  //   const newDisplayData = [...datastore];

  //   if (newValue === 0) {
  //     setDatastore(newDisplayData);
  //     setByLineDisplayData('')
  //   }
  //   else if (newValue === 1) {
  //     setByLineDisplayData('')
  //   }
  //   else {
  //     setByLineDisplayData(newDisplayData[0])
  //   }
  //   setTabValue(newValue);
  // };

  const refineDisplayData = (data, filters, measureList) => {
    const initialData = data;
    let workingData = [];
    if (filters.length === 0) {
      workingData = initialData;
    } else if (filters.length === measureList.length) {
      workingData = [];
    } else {
      filters.forEach((filterItem) => { // Handles Filtering by measure
        if (filterItem.type === 'measure') {
          initialData.forEach((item) => {
            if (item.measure !== filterItem.value) { workingData.push(item) }
          });
        } // Add logic in here for various filter types
      })
    }
    return workingData;
  };

  return (
    <div>
      <FilterDrawer
        filterDrawerOpen={dashboardState.filterDrawerOpen}
        toggleFilterDrawer={dashboardActions.toggleFilterDrawer}
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
              Good times.
            </Grid>
          </Grid>
          More good times.
          {/* <D3IndicatorByLineChart /> */}
        </Paper>
      </TabPanel>
      <TabPanel value={tabValue} index={0}>
        <Grid container justifyContent="space-evenly" direction="column">
          <Grid sx={{ mb: '-30px' }} item>
            <ChartBar
              filterDrawerOpen={dashboardState.filterDrawerOpen}
              toggleFilterDrawer={dashboardActions.toggleFilterDrawer}
            />
          </Grid>
          <Grid item>
            <D3Chart displayData={displayData} />
          </Grid>
        </Grid>
        <MeasureResultsTable
          currentResults={datastore.currentResults}
          handleMeasureChange={handleMeasureChange}
        />
      </TabPanel>
    </div>
  )
}

D3Container.propTypes = {
  dashboardState: PropTypes.shape({
    filterDrawerOpen: PropTypes.bool,
  }),
  dashboardActions: PropTypes.shape({
    toggleFilterDrawer: PropTypes.func,
  }),
};

D3Container.defaultProps = {
  dashboardState: {
    filterDrawerOpen: false,
  },
  dashboardActions: {},
}

export default D3Container;
