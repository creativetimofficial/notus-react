import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import {
  Typography, Box, IconButton, Button,
} from '@mui/material';

function Info({ infoText }) {
  const [displayInfo, setDisplayInfo] = React.useState(false);

  return (
    <Box className="info">
      <IconButton
        className="info__info-button"
        disableFocusRipple
        disableRipple
        onClick={() => setDisplayInfo(!displayInfo)}
      >
        <InfoIcon className="info__info-icon" fontSize="small" />
      </IconButton>
      { displayInfo && (
      <Box className="info__info-box">
        <Typography className="info__text">
          {infoText}
        </Typography>
        <Button
          className="info__button"
          disableFocusRipple
          disableRipple
          onClick={() => setDisplayInfo(false)}
        >
          CLOSE
        </Button>
      </Box>
      )}
    </Box>
  );
}

Info.propTypes = {
  infoText: PropTypes.string,
}

Info.defaultProps = {
  infoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

export default Info;
