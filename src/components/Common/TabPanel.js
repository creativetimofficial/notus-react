import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

function TabPanel({
  children, value, index,
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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
}

TabPanel.defaultProps = {
  value: 0,
  index: 0,
}

export default TabPanel;
