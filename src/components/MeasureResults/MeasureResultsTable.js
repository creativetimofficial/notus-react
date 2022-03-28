/* eslint-disable no-undef */
import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '@mui/icons-material/Help';
import ToolTip from '@mui/material/Tooltip';
import { colorMappingProps } from '../ChartContainer/D3Props';
import MeasureResultsRow from './MeasureResultsRow';

function generateMeasureRowValues(measureResult) {
  return {
    value: measureResult.measure,
    label: measureResult.label,
    type: 'measure',
    included: measureResult.initialPopulation - measureResult.exclusions,
    eligible: measureResult.initialPopulation,
    numerator: measureResult.numerator,
    denominator: measureResult.denominator,
    exclusions: measureResult.exclusions,
  }
}

const measureTip = 'The actual measure. At the moment, these are always HEDIS measures.';
const remainingInclusionsTip = 'The population remaining after exclusions are removed.';
const eligiblePopulationTip = 'The population of patients who are eligible for this measure.';
const numeratorTip = 'The number of patients who have satisfied the criteria for this measure.';
const denominatorTip = 'The population of patients who are eligible for this measure. Currently the same as Eligible Population.';
const availableExclusionsTip = 'The population that can be excluded based on criteria.';

function MeasureResultsTable({ currentResults, handleMeasureChange, colorMapping }) {
  return (
    <Grid container direction="column" spacing={0.25}>
      <Grid container item justifyContent="space-evenly" direction="row" alignItems="center" spacing={2} sx={{ width: '100%', p: '3px', m: '2px' }}>
        <Grid item xs={1}>
          <Typography>
            Measure
          </Typography>
          <ToolTip title={measureTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Remaining Inclusions
          </Typography>
          <ToolTip title={remainingInclusionsTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Eligible Population
          </Typography>
          <ToolTip title={eligiblePopulationTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Numerator
          </Typography>
          <ToolTip title={numeratorTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Denominator
          </Typography>
          <ToolTip title={denominatorTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            Available Exclusions
          </Typography>
          <ToolTip title={availableExclusionsTip}>
            <HelpIcon className="" fontSize="small" />
          </ToolTip>
        </Grid>
        <Grid item xs={1}>
          <Typography>
            View
          </Typography>
        </Grid>
      </Grid>
      {currentResults.map((item) => (
        <Grid
          item
          sx={{ width: '100%' }}
          key={`chart-container-grid-measure-${item.measure}`}
        >
          <MeasureResultsRow
            measureResult={generateMeasureRowValues(item)}
            handleMeasureChange={handleMeasureChange}
            measureColor={colorMapping.find((mapping) => mapping.measure === item.measure)}
          />
        </Grid>
      ))}
      <Divider color="black" />
    </Grid>
  )
}

MeasureResultsTable.propTypes = {
  currentResults: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
    }),
  ),
  handleMeasureChange: PropTypes.func,
  colorMapping: colorMappingProps,
};

MeasureResultsTable.defaultProps = {
  currentResults: [],
  handleMeasureChange: () => undefined,
  colorMapping: [],
}

export default MeasureResultsTable;
