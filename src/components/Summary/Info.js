import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import {
  Typography, Box, IconButton, Button,
} from '@mui/material';

function Info({ infoText }) {
  const [displayInfo, setDisplayInfo] = React.useState(false);

  if (!displayInfo) {
    return (
      <Box className="info info__icon-only">
        <IconButton
          className="info__info-button"
          disableFocusRipple
          disableRipple
          onClick={() => setDisplayInfo(true)}
        >
          <InfoIcon className="info__info-icon" fontSize="small" />
        </IconButton>
      </Box>
    );
  }
  return (
    <Box className="info">
      <Box className="info__info-box">
        <InfoIcon className="info__info-box__icon" fontSize="small" />
        <Typography>
          {infoText}
        </Typography>
        <Button
          className="info__info-box__button"
          disableFocusRipple
          disableRipple
          onClick={() => setDisplayInfo(false)}
        >
          CLOSE
        </Button>
      </Box>
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
