import React, { useState, createContext } from "react";
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { theme } from "assets/styles/AppTheme.js";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// components

import DashboardNavbar from "../components/Navbars/DashboardNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import D3Chart from "../components/D3Container/D3Chart.js";
import Welcome from "../components/Cards/CardWelcome.js";
import Stars from "../components/Cards/CardStars.js";

export const datastoreContext = createContext("");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Admin() {

  const [datastore, setDatastore] = useState("");

  return (
    <>
      <ThemeProvider theme={theme} >
        <datastoreContext.Provider value={{ datastore, setDatastore }}>
          <DashboardNavbar />
            <Paper sx={{ padding: 4, height: '90vh', background: theme.palette.background.main }}>
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={4}>
                <Grid item sm={3} xs={6}>
                  <Item>
                    <Welcome/>
                  </Item>
                </Grid>
                <Grid item sm={3} xs={6}>
                  <Item>
                    <Stars/>
                  </Item>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Item>
                    <Typography variant='subtitle1' align='center'>Impacts and Trends</Typography>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <D3Chart />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>Reports</Item>
                </Grid>
              </Grid>
            </Box>
            </Paper>
            <FooterAdmin />
          </datastoreContext.Provider>
      </ThemeProvider>
    </>
  );
}