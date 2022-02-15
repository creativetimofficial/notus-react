import React, { useState, createContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { theme } from "assets/styles/AppTheme.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// components

import DashboardNavbar from "../components/Navbars/DashboardNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import D3Chart from "../components/D3Container/D3Chart.js";
import Welcome from "../components/Cards/CardWelcome.js";
import Stars from "../components/Cards/CardStars.js";
import D3Container from "components/D3Container/D3Container.js";
import { dataList } from "components/D3Container/DemoData.js";
import Banner from "../components/DashboardBanner/Banner.js";
import RatingsTrends from "../components/utils/RatingsTrends.js";
import { grey } from "@mui/material/colors";

export const datastoreContext = createContext({});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius.xl,
}));

export default function Admin() {
  const [datastore, setDatastore] = useState(dataList);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <datastoreContext.Provider value={{ datastore, setDatastore }}>
          <DashboardNavbar />
          <Paper
            sx={{
              padding: 4,
              height: "90vh",
              background: theme.palette.background.main,
              mb: "20px",
            }}
          >
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={4}>
                <Grid item sm={12} sx={{ bgColor: grey }}>
                  <Item>
                    <Banner />
                    <RatingsTrends />
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
          <FooterAdmin sx={{ mt: "20px" }} />
        </datastoreContext.Provider>
      </ThemeProvider>
    </Box>
  );
}
