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
      <Typography className="banner__update-time">
        {`Last Updated: ${datastore.lastUpdated}`}
      </Typography>
      <Typography className="banner__description">
        Descriptive text about this section - gratuitous octopus niacin, sodium
        glutimate.
      </Typography>
    </Box>
  );
}

export default Banner;
