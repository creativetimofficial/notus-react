import React, {
  useState,
  useContext,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// components

import Footer from '../components/Footers/Footer';
import D3Container from '../components/D3Container';
import theme from '../assets/styles/AppTheme';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import Welcome from '../components/Cards/CardWelcome';
import Stars from '../components/Cards/CardStars';
import Trends from '../components/Cards/CardTrends';
import { DatastoreContext } from '../context/DatastoreProvider';

const Item = styled(Paper)(() => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Dashboard() {
  const { datastore } = useContext(DatastoreContext);
  const [filterMenuOpen, toggleFilterMenu] = useState(false);

  const dashboardState = {
    filterMenuOpen,
  }

  const dashboardActions = {
    toggleFilterMenu,
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Box>
  );
}
