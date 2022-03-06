import React, {
  useReducer,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// components

import Footer from '../components/Footers/Footer';
import D3Container from '../components/D3Container';
import dataList from '../components/D3Container/DemoData';
import theme from '../assets/styles/AppTheme';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import Welcome from '../components/Cards/CardWelcome';
import Stars from '../components/Cards/CardStars';
import Trends from '../components/Cards/CardTrends';
import { DashboardReducer, initialState } from '../context/DashboardReducer';

const axios = require('axios').default;

export const DatastoreContext = createContext({});

const Item = styled(Paper)(() => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

const searchUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/searchResults`);
const trendUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/trends`);
const devData = `${process.env.REACT_APP_DEV_DATA}`;

export default function Dashboard() {
  const [datastore, dispatch] = useReducer(DashboardReducer, initialState);

  const dispatchActions = useMemo(() => ({
    setResults: (results) => dispatch({ type: 'SET_RESULTS', payload: results }),
    setTrends: (trends) => dispatch({ type: 'SET_TRENDS', payload: trends }),
  }), [dispatch]);

  const reducerValue = useMemo(() => ({
    datastore, dispatchActions,
  }), [datastore, dispatchActions]);

  const [filterMenuOpen, toggleFilterMenu] = useState(false);

  const dashboardState = {
    filterMenuOpen,
  }

  const dashboardActions = {
    toggleFilterMenu,
  };

  useEffect(() => {
    if (devData === 'true') {
      dispatchActions.setResults(dataList);
    } else {
      const searchPromise = axios.get(searchUrl);
      const trendPromise = axios.get(trendUrl);
      Promise.all([searchPromise, trendPromise]).then((values) => {
        dispatchActions.setResults(values[0].data)
        dispatchActions.setTrends(values[1].data);
      });
    }
  }, [dispatchActions]);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <DatastoreContext.Provider value={reducerValue}>
          <DashboardNavbar />
          <Paper
            className="dashboard__paper"
            sx={{
              padding: 4, height: '90vh', background: theme.palette.background.main, mb: '20px',
            }}
          >
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={4}>
                <Grid item sm={3} xs={6}>
                  <Item>
                    <Welcome />
                  </Item>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Item>
                    <Stars />
                  </Item>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Trends
                      trends={datastore.trends}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <D3Container
                      dashboardState={dashboardState}
                      dashboardActions={dashboardActions}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>Reports</Item>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Footer sx={{ mt: '20px' }} />
        </DatastoreContext.Provider>
      </ThemeProvider>
    </Box>
  );
}
