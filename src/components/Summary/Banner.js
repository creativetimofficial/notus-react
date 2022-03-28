import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { DatastoreContext } from '../../context/DatastoreProvider';

function Banner() {
  const { datastore } = useContext(DatastoreContext);
  return (
    <Box className="banner">
      <Typography variant="h1" className="banner__header">
        HEDIS Dashboard
      </Typography>
      <Box className="banner__update-box">
        <Typography className="banner__update-label">
          Last Updated:
        </Typography>
        <Typography className="banner__update-time">
          {' '}
          {datastore.lastUpdated}
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
