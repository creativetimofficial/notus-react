import {
  Grid, Paper, Tab, Tabs,
} from '@mui/material';
import React, {
  createContext, useState, useEffect,
} from 'react';
import moment from 'moment';
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

// If nothing set, select all.
const defaultFilterState = {
  domainsOfCare: [],
  stars: [],
  percentRange: [0, 100],
  sum: 0,
}

function D3Container({ dashboardState, dashboardActions, store }) {
  const [displayData, setDisplayData] = useState(store.results.map((result) => ({ ...result })));
  const [currentFilters, setCurrentFilters] = useState(defaultFilterState);
  const [tabValue, setTabValue] = useState(0);
  const [byLineMeasure, setByLineMeasure] = useState('');
  const [byLineDisplayData, setByLineDisplayData] = useState([]);
  const [selectedMeasures, setSelectedMeasures] = useState([]);
  const [dateValue, setDateValue] = useState([null, null]);

  const workingList = [];
  store.results.forEach((item) => workingList.push(item.measure));
  const measureList = Array.from(new Set(workingList));

  const colorMap = measureList.map((item, index) => ({
    measure: item,
    color: index <= 10 ? colorArray[index] : colorArray[index % 10],
  }))

  useEffect(() => {
    setDisplayData(store.results.map((result) => ({ ...result })))
  }, [store]);

  useEffect(() => {
    if (store.currentResults !== undefined) {
      setSelectedMeasures(store.currentResults.map((result) => result.measure));
    }
  }, [setSelectedMeasures, setCurrentFilters, store.currentResults]);

  const handleDisplayDataUpdate = (measures, filters, dates) => {
    let newDisplayData = store.results.map((result) => ({ ...result }));
    newDisplayData = newDisplayData.filter((result) => measures.includes(result.measure));
    if (filters.domainsOfCare.length > 0) {
      newDisplayData = newDisplayData.filter(
        (result) => filters.domainsOfCare.includes(store.info[result.measure].domainOfCare),
      );
    }
    if (filters.stars.length > 0) {
      newDisplayData = newDisplayData.filter(
        (result) => filters.stars.includes(Math.floor( // Floor for the .5 stars.
          store.currentResults.find((current) => current.measure === result.measure).starRating,
        )),
      )
    }
    if (filters.percentRange[0] > 0 || filters.percentRange[1] < 100) {
      newDisplayData = newDisplayData.filter(
        (result) => {
          const { value } = store.currentResults.find(
            (current) => current.measure === result.measure,
          );
          return value >= filters.percentRange[0] && value <= filters.percentRange[1]
        },
      );
    }
    if (dates) {
      if (dates.startDate || dates.endDate) {
        newDisplayData = newDisplayData.filter(
          (result) => {
            if (dates.startDate && dates.endDate) {
              return (moment(result.date).unix() < moment(dates.endDate).unix()
                && moment(result.date).unix() > moment(dates.startDate).unix())
            }
            if (dates.startDate && dates.endDate === null) {
              return moment(result.date).unix() > moment(dates.startDate).unix()
            }
            if (dates.endDate && dates.startDate === null) {
              return moment(result.date).unix() < moment(dates.endDate).unix()
            }
            return false;
          },
        )
      }
    }
    setDisplayData(newDisplayData);
  }

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
    let newSelectedMeasures;
    if (event.target.checked) {
      newSelectedMeasures = selectedMeasures.concat(event.target.value);
      setSelectedMeasures(newSelectedMeasures);
    } else {
      newSelectedMeasures = selectedMeasures.filter((result) => result !== event.target.value);
      setSelectedMeasures(newSelectedMeasures);
    }
    handleDisplayDataUpdate(newSelectedMeasures, currentFilters, buildDates(dateValue));
  };

  const handleFilterChange = (filterOptions) => {
    setCurrentFilters(filterOptions);
    handleDisplayDataUpdate(selectedMeasures, filterOptions, buildDates(dateValue));
  }

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

  const buildDates = (dateState) => ({
    startDate: dateState[0],
    endDate: dateState[1],
  })

  const handleDateChange = (dates) => {
    handleDisplayDataUpdate(selectedMeasures, currentFilters, dates);
  }

  return (
    <div>
      <FilterDrawer
        filterDrawerOpen={dashboardState.filterDrawerOpen}
        toggleFilterDrawer={dashboardActions.toggleFilterDrawer}
        currentFilters={currentFilters}
        handleFilterChange={handleFilterChange}
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
            className="d3-container__chart"
          >
            <ChartBar
              filterDrawerOpen={dashboardState.filterDrawerOpen}
              toggleFilterDrawer={dashboardActions.toggleFilterDrawer}
              dateValue={dateValue}
              changeDateValue={setDateValue}
              handleDateChange={handleDateChange}
              filterSum={currentFilters.sum}
            />
          </Grid>
          <Grid item>
            <D3Chart
              displayData={displayData}
              colorMapping={colorMap}
              measureInfo={store.info}
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
