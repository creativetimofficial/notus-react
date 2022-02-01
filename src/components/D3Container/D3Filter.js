import { FormControlLabel, FormGroup, Stack, Switch } from '@mui/material';
import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function D3Filter(props) {

    const filter = props.filter;
    const onChange = props.changeFunction;

    return (
        <Stack direction="row" spacing={2}>
            <FormGroup sx={{ ml: "8px", mt: '55px' }}>
                <FormControlLabel labelPlacement="end" control={
                    <Switch size="large" sx={{ width: '50px', pr: '10px', mx: '10px' }} icon={<CircleOutlinedIcon />} onChange={onChange} color="success" checkedIcon={<CircleIcon />} />
                } label={filter} />
            </FormGroup>
        </Stack>
    )
}

export default D3Filter;