import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// components

import { grey } from '@mui/material/colors';
import Footer from '../components/Footers/Footer';
import D3Container from '../components/ChartContainer';
import theme from '../assets/styles/AppTheme';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import Banner from '../components/Banner/Banner';

const Item = styled(Paper)(() => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Dashboard() {
  const [filterDrawerOpen, toggleFilterDrawer] = useState(false);

  // If control needs to be shared across multiple components,
  // add them through useState above and append them to these.
  const dashboardState = {
    filterDrawerOpen,
  };

  const dashboardActions = {
    toggleFilterDrawer,
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <DashboardNavbar />
        <Paper
          className="dashboard__paper"
          sx={{
            padding: 4,
            height: '90vh',
            background: theme.palette.background.main,
            mb: '20px',
          }}
        >
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
              <Grid item sm={12} sx={{ bgColor: grey }}>
                <Item>
                  <Banner />
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
