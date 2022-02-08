import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function D3Filter(props) {

    const filter = props.filter;
    const onChange = props.changeFunction;

    return (
        <Paper sx={{ backgroundColor: "background.secondary" }}>
            <Grid container justifyContent='space-evenly' direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
                <Grid item justifyContent='center' alignItems='center' xs={2}>
                    <Typography variant='caption'>
                        {filter.name}
                    </Typography>
                </Grid>
                <Grid item justifyContent='center' alignItems='center' xs={2}>
                    <Typography variant='caption'>
                        {filter.average}
                    </Typography>
                </Grid>
                <Grid item justifyContent='center' alignItems='center' xs={2}>
                    <Typography variant='caption'>
                        {filter.display1}
                    </Typography>
                </Grid>
                <Grid item justifyContent='center' alignItems='center' xs={2}>
                    <Typography variant='caption'>
                        {filter.display2}
                    </Typography>
                </Grid>
                <Grid item justifyContent='center' alignItems='center' xs={2}>
                    <FormGroup sx={{ ml: "8px" }}>
                        <Checkbox defaultChecked size="large" color="white" onChange={() => onChange(filter)} />
                    </FormGroup>
                </Grid>
            </Grid >
        </Paper>
    )
}

export default D3Filter;