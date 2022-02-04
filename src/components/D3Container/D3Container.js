import React, { createContext, useContext, useState } from 'react';
import D3Chart from "./D3Chart";
import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { datastoreContext } from '../../layouts/dashboard.js';

import { dataList } from './DemoData';
import D3Filter from './D3Filter';

export const currentFilterContext = createContext([])
export const displayDataContext = createContext([])

function D3Container() {

    const { datastore, setDatastore } = useContext(datastoreContext)
    const [displayData, setDisplayData] = useState(datastore);
    const [currentFilters, setCurrentFilters] = useState([]);

    const workingList = [];
    dataList.forEach((item) => workingList.push(item.measure));
    const measureList = [...new Set(workingList)];

    const changeFunction = (filter) => {
        const filterArray = [...currentFilters];
        //Will need to be adjusted once model data is available.
        const active = filterArray.find((item) => item === filter);
        if (active !== undefined) {
            const newFilterArray = filterArray.filter((item) => item !== filter);
            setCurrentFilters(newFilterArray);
            const newDisplayData = refineDisplayData();
            setDisplayData(newDisplayData);
        }
        else {
            filterArray.push(filter);
            setCurrentFilters(filterArray);
            const newDisplayData = refineDisplayData();
            setDisplayData(newDisplayData);
        }
    }

    const refineDisplayData = () => {
        const initialData = [...datastore];
        let workingData = [];
        const filterArray = [...currentFilters];
        if (filterArray.length === 0) {
            console.log('empty')
            workingData = initialData;
        }
        else {
            console.log('fired')
            filterArray.forEach((filterItem) => {
                initialData.forEach((item) => {
                    if (item.measure !== filterItem) { workingData.push(item) }
                });
            })
        }
        console.log(workingData);
        return workingData;
    }

    return (
        <div>
            <displayDataContext.Provider value={{ displayData, setDisplayData }}>
                <currentFilterContext.Provider value={{ currentFilters, setCurrentFilters }}>
                    <D3Chart />
                    <Grid container direction="vertical" spacing={1}>
                        {measureList.map((filter) => {
                            return (
                                <Grid item sx={{ width: '100%' }}>
                                    <D3Filter filter={filter} changeFunction={() => changeFunction(filter)} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </currentFilterContext.Provider>
            </displayDataContext.Provider>
        </div>
    )

}

export default D3Container;