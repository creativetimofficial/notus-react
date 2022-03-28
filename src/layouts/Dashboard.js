import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// components

import { DatastoreContext } from '../context/DatastoreProvider';
import Footer from '../components/Footers/Footer';
import D3Container from '../components/ChartContainer';
import theme from '../assets/styles/AppTheme';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import Banner from '../components/Summary/Banner';
import RatingTrends from '../components/Summary/RatingTrends';

const Item = styled(Paper)(() => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Dashboard() {
  const { datastore } = useContext(DatastoreContext);
  const [filterDrawerOpen, toggleFilterDrawer] = useState(false);
  const [activeMeasure, setActiveMeasure] = useState({});

  useEffect(() => {
    if (datastore.currentResults !== undefined) {
      setActiveMeasure(datastore.currentResults.find((result) => result.measure === 'composite'));
    }
  }, [datastore.currentResults]);

  // If control needs to be shared across multiple components,
  // add them through useState above and append them to these.
  const dashboardState = {
    filterDrawerOpen,
  };

  const dashboardActions = {
    toggleFilterDrawer,
    setActiveMeasure,
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <DashboardNavbar />
        <Paper className="dashboard__paper">
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
              <Grid item className="dashboard__summary" sm={12}>
                <Banner />
                <RatingTrends
                  activeMeasure={activeMeasure}
                  trends={datastore.trends}
                  info={datastore.info}
                />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <D3Container
                    store={datastore}
                    dashboardState={dashboardState}
                    dashboardActions={dashboardActions}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
