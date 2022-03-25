import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import {
  Typography, Box, IconButton, Button,
} from '@mui/material';

function Info({ infoBoxId, infoText }) {
  const iconBoxId = `${infoBoxId}-icon`;
  const disableRipple = true;
  return (
    <Box className="info">
      <Box id={iconBoxId} className="info__icon-only">
        <IconButton
          className="info__info-button"
          disableFocusRipple={disableRipple}
          disableRipple={disableRipple}
          onClick={() => {
            const hiddenDiv = document.getElementById(infoBoxId);
            hiddenDiv.classList.remove('info__info-box--hide');
            hiddenDiv.classList.add('info__info-box');

            const shownDiv = document.getElementById(iconBoxId);
            shownDiv.classList.remove('info__icon-only');
            shownDiv.classList.add('info__icon-only--hide');
          }}
        >
          <InfoIcon className="info__info-icon" fontSize="small" />
        </IconButton>
      </Box>
      <Box id={infoBoxId} className="info__info-box--hide">
        <InfoIcon className="info__info-box__icon" fontSize="small" />
        <Typography>
          {infoText}
        </Typography>
        <Button
          className="info__info-box__button"
          disableFocusRipple={disableRipple}
          disableRipple={disableRipple}
          onClick={() => {
            const hiddenDiv = document.getElementById(iconBoxId);
            hiddenDiv.classList.remove('info__icon-only--hide');
            hiddenDiv.classList.add('info__icon-only');

            const shownDiv = document.getElementById(infoBoxId);
            shownDiv.classList.remove('info__info-box');
            shownDiv.classList.add('info__info-box--hide');
          }}
        >
          CLOSE
        </Button>
      </Box>
    </Box>
  )
}

Info.propTypes = {
  infoBoxId: PropTypes.string,
  infoText: PropTypes.string,
}

Info.defaultProps = {
  infoBoxId: 'info',
  infoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

export default Info;
