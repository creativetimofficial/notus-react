import {
  Grid, Paper, Tab, Tabs,
} from '@mui/material';
import React, {
  createContext, useState, useEffect,
} from 'react';
import ChartBar from './ChartBar';
import D3Chart from './D3Chart';
import D3IndicatorByLineSelector from './D3IndicatorByLineSelector';
import D3IndicatorByLineChart from './D3IndicatorByLineChart';
import TabPanel from '../Common/TabPanel';
import FilterDrawer from '../FilterMenu/FilterDrawer';
import MeasureResultsTable from '../MeasureResults/MeasureResultsTable';
import { storeProps, dashboardStateProps, dashboardActionsProps } from './D3Props';

export const firstRenderContext = createContext(true)

const colorArray = [
  '#003F5C',
  '#2F4B7C',
  '#665191',
  '#A05195',
  '#D45087',
  '#F95D6A',
  '#FF7C43',
  '#FFA600',
  '#9D02D7',
  '#0000FF',
]

function D3Container({ dashboardState, dashboardActions, store }) {
  const [displayData, setDisplayData] = useState(store.results);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [byLineMeasure, setByLineMeasure] = useState('');
  const [byLineDisplayData, setByLineDisplayData] = useState([]);
  const [selectedMeasures, setSelectedMeasures] = useState([]);

  const workingList = [];
  store.results.forEach((item) => workingList.push(item.measure));
  const measureList = Array.from(new Set(workingList));

  useEffect(() => {
    if (measureList !== undefined) {
      setSelectedMeasures(measureList);
    }
  }, [setSelectedMeasures, measureList]);

  const colorMap = measureList.map((item, index) => ({
    measure: item,
    color: index <= 10 ? colorArray[index] : colorArray[index % 10],
  }))

  const handleTabChange = (event, index) => {
    setTabValue(index);
    setByLineMeasure(store.currentResults[0].measure);
    const filteredDisplayData = store.results.filter(
      (item) => item.measure === store.currentResults[0].measure,
    );
    setByLineDisplayData(filteredDisplayData);
    dashboardActions.setActiveMeasure(store.currentResults[0]);
  }

  const handleMeasureChange = (event) => {
    if (event.target.checked) {
      const newDisplayData = displayData.concat(store.results.filter(
        (result) => result.measure === event.target.value,
      ));
      setSelectedMeasures(selectedMeasures.concat(event.target.value));
      setDisplayData(newDisplayData);
    } else {
      setSelectedMeasures(selectedMeasures.filter((result) => result !== event.target.value));
      setDisplayData(displayData.filter((result) => result.measure !== event.target.value));
    }
  };

  // const handleFilterChange = (filterOptions) => {
  //   console.log('Cool');
  // }

  const handleByLineChange = (event) => {
    setByLineMeasure(event.target.value);
    const filteredDisplayData = store.results.filter(
      (item) => item.measure === event.target.value,
    );
    setByLineDisplayData(filteredDisplayData);
    dashboardActions.setActiveMeasure(store.currentResults.filter(
      (item) => item.measure === event.target.value,
    )[0]);
  };

  useEffect(() => {
    setDisplayData(store.results);
  }, [store]);

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
            <Grid
              item
              sx={{ width: '25%' }}
            >
              <D3IndicatorByLineSelector
                currentResults={store.currentResults}
                byLineMeasure={byLineMeasure}
                handleByLineChange={handleByLineChange}
              />
            </Grid>
          </Grid>
          <D3IndicatorByLineChart
            byLineDisplayData={byLineDisplayData}
          />
        </Paper>
      </TabPanel>
      <TabPanel value={tabValue} index={0}>
        <Grid container justifyContent="space-evenly" direction="column">
          <Grid
            item
            sx={{ mb: '-30px' }}
            className="d3-container__chart"
          >
            <ChartBar
              filterDrawerOpen={dashboardState.filterDrawerOpen}
              toggleFilterDrawer={dashboardActions.toggleFilterDrawer}
            />
          </Grid>
          <Grid item>
            <D3Chart
              displayData={displayData}
              colorMapping={colorMap}
            />
          </Grid>
        </Grid>
        <MeasureResultsTable
          currentResults={store.currentResults}
          handleMeasureChange={handleMeasureChange}
          colorMapping={colorMap}
        />
      </TabPanel>
    </div>
  )
}

D3Container.propTypes = {
  store: storeProps,
  dashboardState: dashboardStateProps,
  dashboardActions: dashboardActionsProps,
};

D3Container.defaultProps = {
  store: [],
  dashboardState: {
    filterDrawerOpen: false,
  },
  dashboardActions: {},
}

export default D3Container;
