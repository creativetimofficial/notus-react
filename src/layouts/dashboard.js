import React, { useState, useEffect, createContext } from "react";
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
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures`)
      .then((response) => response.json())
      .then((res) => {
        if (res && res.length > 0) {
          const specialName = "Composite";
          const first = res.find((a) => a.name === specialName);
          const theRestSorted = res
            .filter((a) => a.name !== specialName)
            .sort((a, b) => a.name.localeCompare(b.name));
          setMeasures([first, ...theRestSorted]);
        }
      });
  }, []);

  const [datastore, setDatastore] = useState("");
  let comp = { displayName: "Composite Score", rating: "" }
  comp = measures && measures.length ? measures[0] : comp;
  const compName = "Composite";
  const measureNoComp = measures
    .filter(measure => measure.name !== compName)
    .sort((a, b) => a.displayName.toLowerCase().localeCompare(b.displayName.toLowerCase()));

  const sortedImpact = measures.length
    ? Object.entries(comp.impact)
      .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
    : undefined;

  const labels = measures.length ? sortedImpact.map(el => el[0]) : [];
  const data = measures.length ? sortedImpact.map(el => el[1]) : [];

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