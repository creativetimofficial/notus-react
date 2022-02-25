import React, { useState, createContext, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// components

import FooterAdmin from '../components/Footers/FooterAdmin';
import D3Container from '../components/D3Container/ChartContainer';
import dataList from '../components/D3Container/DemoData';
import theme from '../assets/styles/AppTheme';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import D3Chart from '../components/D3Container/D3Chart';
import Welcome from '../components/Cards/CardWelcome';
import Stars from '../components/Cards/CardStars';

const axios = require('axios').default;

export const datastoreContext = createContext({});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

const searchUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/search`);

export default function Admin() {
  const [datastore, setDatastore] = useState([]);

  useEffect(() => {
    axios.get(searchUrl.href)
      .then((res) => {
        setDatastore(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <datastoreContext.Provider value={{ datastore, setDatastore }}>
          <DashboardNavbar />
          <Paper sx={{
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
                    <Typography variant="subtitle1" align="center">Impacts and Trends</Typography>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <D3Container />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>Reports</Item>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <FooterAdmin sx={{ mt: '20px' }} />
        </datastoreContext.Provider>
      </ThemeProvider>
    </Box>
  );
}
