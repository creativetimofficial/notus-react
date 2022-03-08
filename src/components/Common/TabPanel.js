import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

function TabPanel({
  children, value, index, ...other
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.number,
  index: PropTypes.number,
  other: PropTypes.shape({}),
}

TabPanel.defaultProps = {
  value: 0,
  index: 0,
  other: {},
}

export default TabPanel;
