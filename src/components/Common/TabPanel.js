import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

// Mui's own documentation uses div over Box. Recommend leaving it.
// https://mui.com/components/tabs/
function TabPanel({
  children, value, index,
}) {
  return (
    <div
      className="tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box className="tab-panel__box">
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
