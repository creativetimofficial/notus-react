import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function D3Filter(props) {

    const filter = props.filter;
    const onChange = props.changeFunction;

    return (
        <Grid container justifyContent='space-between' direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
            <Grid item>
                <Typography>
                    {filter}
                </Typography>
            </Grid>
            <Grid item>
                <FormGroup sx={{ ml: "8px" }}>
                    {/* <FormControlLabel labelPlacement="start" color="secondary" control={
                        <Switch size="large" icon={<CircleOutlinedIcon />} onChange={onChange} color="success" checkedIcon={<CircleIcon />} />
                    } label={"Enable"} /> */}
                    <FormControlLabel labelPlacement="start" color="secondary" control={
                        <Checkbox defaultChecked size="large" color="success" onChange={() => onChange(filter)} />
                    } label={"View"} />
                </FormGroup>
            </Grid>
        </Grid >
    )
}

export default D3Filter;