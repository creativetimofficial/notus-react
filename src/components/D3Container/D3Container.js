import React, { createContext, useContext, useState } from "react";
import D3Chart from "./D3Chart";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { datastoreContext } from "../../layouts/dashboard.js";

import D3Filter from "./D3Filter";

export const currentFilterContext = createContext([]);
export const displayDataContext = createContext([]);
export const firstRenderContext = createContext(true);

function D3Container() {
  const { datastore, setDatastore } = useContext(datastoreContext);
  const [displayData, setDisplayData] = useState(datastore);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const workingList = [];
  datastore.forEach((item) => workingList.push(item.measure));
  const measureList = [...new Set(workingList)];

  const changeFunction = (filter) => {
    const filterArray = [...currentFilters];
    //Will need to be adjusted once model data is available.
    const active = filterArray.find((item) => item === filter.name);
    if (active !== undefined) {
      const newFilterArray = filterArray.filter((item) => item !== filter.name);
      setCurrentFilters(newFilterArray);
      setDisplayData(refineDisplayData([...datastore], newFilterArray));
    } else {
      filterArray.push(filter.name);
      setCurrentFilters(filterArray);
      setDisplayData(refineDisplayData([...datastore], filterArray));
    }
  };

  const refineDisplayData = (data, filters) => {
    const initialData = data;
    let workingData = [];
    const filterArray = filters;
    if (filterArray.length === 0) {
      workingData = initialData;
    } else if (filterArray.length === measureList.length) {
      workingData = [];
    } else {
      filterArray.forEach((filterItem) => {
        initialData.forEach((item) => {
          if (item.measure !== filterItem) {
            workingData.push(item);
          }
        });
      });
    }
    return workingData;
  };

  return (
    <div>
      <displayDataContext.Provider value={{ displayData, setDisplayData }}>
        <currentFilterContext.Provider
          value={{ currentFilters, setCurrentFilters }}
        >
          <firstRenderContext.Provider value={{ firstRender, setFirstRender }}>
            <D3Chart />
            {/* <Grid container direction="vertical" spacing={0.25}>
                            <Grid container item justifyContent='space-evenly' direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
                                <Grid item xs={1}>
                                    <Typography>
                                        Measure
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        Icluded
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        Eligible Population
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        Numerator
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        Denominator
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>
                                        Exclusions
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>
                                        View
                                    </Typography>
                                </Grid>
                            </Grid>
                            {measureList.map((item) => {
                                const filter = {
                                    name: item,
                                    included: Math.round(Math.random() * 10000),
                                    eligible: Math.round(Math.random() * 10000),
                                    numerator: Math.round(Math.random() * 10000),
                                    denominator: Math.round(Math.random() * 10000),
                                    exclusions: Math.round(Math.random() * 10000),
                                }
                                return (
                                    <Grid item sx={{ width: '100%' }}>
                                        <D3Filter filter={filter} changeFunction={() => changeFunction(filter)} />
                                    </Grid>
                                )
                            })}
                            <Divider color='black' />
                        </Grid> */}
          </firstRenderContext.Provider>
        </currentFilterContext.Provider>
      </displayDataContext.Provider>
    </div>
  );
}

export default D3Container;
