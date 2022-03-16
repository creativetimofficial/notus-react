import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import PropTypes from 'prop-types';

function D3IndicatorByLineSelector({ currentResults, byLineMeasure, handleByLineChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel className="d3-indicator-by-line-selector">Select Measure</InputLabel>
      <Select
        className="indicator-by-line-selector__select"
        value={byLineMeasure}
        label="Measure By Line"
        onChange={handleByLineChange}
        sx={{ color: 'black.light' }}
      >
        {currentResults.map((measure) => (
          <MenuItem
            sx={{ color: 'black.light' }}
            key={`by-line-menu-item-selector-${measure.measure}`}
            value={measure.measure}
          >
            {measure.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

D3IndicatorByLineSelector.propTypes = {
  currentResults: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
  byLineMeasure: PropTypes.string,
  handleByLineChange: PropTypes.func,
};

D3IndicatorByLineSelector.defaultProps = {
  currentResults: [],
  byLineMeasure: '',
  handleByLineChange: () => undefined,
}

export default D3IndicatorByLineSelector;
