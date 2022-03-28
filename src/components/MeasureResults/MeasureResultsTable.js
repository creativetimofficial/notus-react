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
const viewTip = 'Toggles on and off displaying the measure in the graph above.';

function MeasureResultsTable({ currentResults, handleMeasureChange, colorMapping }) {
  return (
    <Grid container className="measure-results-table">
      <Grid container item className="measure-results-table__header-section">
        <Grid item className="measure-results-table__title-align-small">
          <Typography className="measure-results-table__title">
            Measure
          </Typography>
          <ToolTip title={measureTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align">
          <Typography className="measure-results-table__title">
            Remaining Inclusions
          </Typography>
          <ToolTip title={remainingInclusionsTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align">
          <Typography className="measure-results-table__title">
            Eligible Population
          </Typography>
          <ToolTip title={eligiblePopulationTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align">
          <Typography className="measure-results-table__title">
            Numerator
          </Typography>
          <ToolTip title={numeratorTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align">
          <Typography className="measure-results-table__title">
            Denominator
          </Typography>
          <ToolTip title={denominatorTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align">
          <Typography className="measure-results-table__title">
            Available Exclusions
          </Typography>
          <ToolTip title={availableExclusionsTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
        <Grid item className="measure-results-table__title-align-small">
          <Typography>
            View
          </Typography>
          <ToolTip title={viewTip}>
            <HelpIcon className="measure-results-table__help-icon" />
          </ToolTip>
        </Grid>
      </Grid>
      {currentResults.map((item) => (
        <Grid
          item
          className="measure-results-table__row"
          key={`chart-container-grid-measure-${item.measure}`}
        >
          <MeasureResultsRow
            measureResult={generateMeasureRowValues(item)}
            handleMeasureChange={handleMeasureChange}
            measureColor={colorMapping.find((mapping) => mapping.measure === item.measure)}
          />
        </Grid>
      ))}
      <Divider className="measure-results-table__divider" />
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
