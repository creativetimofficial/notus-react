/* eslint-disable no-underscore-dangle */
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TickChange } from '../Utilites/TickChange';
import { colorMappingProps } from './D3Props';

function D3IndicatorByLineChart({
  byLineDisplayData,
  colorMapping,
  measureInfo,
}) {
  // Binder for react to apply changes to the svg
  const D3IndicatorLineChart = useRef();

  // Date Parser
  const parseDate = d3.timeParse('%Y-%m-%d');

  // Basic Styling consts to be used later
  const margin = {
    top: 50,
    right: 30,
    bottom: 75,
    left: 45,
  };
  const box = document.querySelector('.MuiGrid-item');
  const widthBase = window.innerWidth || document.body.clientWidth;
  const width = box === null ? widthBase * 0.8 : box.offsetWidth - 250;
  const height = 500;
  const tickCount = byLineDisplayData.length;
  function TimeFormatter(dateToFormat) {
    const dateSplit = dateToFormat.split('T')[0];
    const dividedDate = dateSplit.split('-');

    return `Date: ${dividedDate[1]}-${dividedDate[2]}-${dividedDate[0]}`;
  }
  useEffect(() => {
    // Clear previous SVG
    d3.select(D3IndicatorLineChart.current).selectAll('*').remove();

    // SVG constrol and also styling
    const svg = d3
      .select(D3IndicatorLineChart.current)
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'd3-indicator-by-line-chart__line-chart')
      .append('g')
      .attr('transform', `translate(${margin.left + 65},${margin.top})`);

    // Generates labels and context for x axis
    const x = d3
      .scaleTime()
      // What data we're measuring
      .domain(
        d3.extent(byLineDisplayData, (d) => parseDate(d.date.split('T')[0])),
      )
      // The 'width' of the data
      .range([0, width]);

    // X Axis labels and context
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom / 1.4})`)
      .attr('class', 'd3-indicator-by-line-chart__dates-x')
      .call(
        d3.axisBottom(x).ticks(tickCount).tickFormat(d3.timeFormat('%b %d')),
      );

    // Generates Label and context for y axis
    d3.max(byLineDisplayData, (d) => d.value);
    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, 0]);

    svg
      .append('g')
      .attr('class', 'd3-indicator-by-line-chart__rating-y')
      .call(d3.axisLeft(y));

    // Grid
    // gridlines in x axis function
    function makeXGridlines() {
      return d3.axisBottom(x).ticks(tickCount);
    }

    // gridlines in y axis function
    function makeYGridlines() {
      return d3.axisLeft(y).ticks(5);
    }

    // add the X gridlines
    svg
      .append('g')
      .attr('class', 'd3-indicator-by-line-chart__x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(makeXGridlines().tickSize(-height).tickFormat(''));
    // add the Y gridlines
    svg
      .append('g')
      .attr('class', 'd3-indicator-by-line-chart__y-axis')
      .call(makeYGridlines().tickSize(-width).tickFormat(''));

    d3.selectAll('.axis-grid line').style('stroke', 'lightgray');
    // Change Ticks to Percent
    const ChartType = 'D3IndicatorByLineChart';
    TickChange(ChartType);
    // Generates the actual line
    const line = d3
      .line()
      // .curve(d3.curveCardinal)
      .x((d) => x(parseDate(d.date.split('T')[0])))
      .y((d) => y(d.value));

    // X axis label:
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + 20)
      .attr('class', 'd3-indicator-by-line-chart__label')
      .text('Year to Date');

    // Y axis label:
    svg
      .append('text')
      .attr('class', 'd3-indicator-by-line-chart__label')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left - 25)
      .attr('x', -margin.top - 160)
      .text('Percent');
    // Tool Tips
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'd3-indicator-by-line-chart__tooltip');

    const toolTipGenerator = (event) => {
      const avg30 = margin.left * 0.3;
      const tickWidth = Math.floor(width / tickCount + avg30);
      const index = Math.floor((event.offsetX - margin.left) / tickWidth);
      const MeasureValue = measureInfo[event.srcElement.__data__[index].measure].displayLabel;
      const measureDisplay = MeasureValue === 'Composite'
        ? `${MeasureValue} Score`
        : `Measure: ${MeasureValue}`;
      const valueDisplay = `Value: ${
        Math.floor(event.srcElement.__data__[index].value * 100) / 100
      }%`;
      const dateDisplay = TimeFormatter(event.srcElement.__data__[index].date);
      tooltip.text(`${measureDisplay} \n ${valueDisplay} \n ${dateDisplay}`);
      const { color } = colorMapping.find(
        (mapping) => mapping.measure === event.target.__data__[0].measure,
      );
      return tooltip
        .attr('data-html', 'true')
        .style('background-color', color)
        .style('visibility', 'visible')
        .style('top', `${event.pageY - 10}px`)
        .style('left', `${event.pageX + 10}px`);
    };

    // Iterates through an array variation.
    svg
      .append('path')
      .datum(byLineDisplayData)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr(
        'stroke',
        colorMapping.find(
          (mappingMeasure, i) => mappingMeasure.measure === byLineDisplayData[i].measure,
        ).color,
      )
      .attr('opacity', '.33')
      .attr('stroke-width', 5)
      .attr('d', line)
      .on('mouseover', (event) => {
        d3.select(event.currentTarget).attr('opacity', '1');
        toolTipGenerator(event);
      })
      .on('mousemove', (event) => toolTipGenerator(event))
      .on('mouseout', (event) => {
        d3.select(event.currentTarget).attr('opacity', '.50');
        return tooltip.style('visibility', 'hidden');
      });
    // Create line at end of chart to make it a complete box
    svg
      .append('line')
      .attr('x1', width)
      .attr('y1', 0)
      .attr('x2', width)
      .attr('y2', height - margin.bottom)
      .style('stroke-width', 1)
      .style('stroke', '#CFD8DC')
      .style('fill', 'none');
  });

  return (
    <div className="d3-indicator-by-line-chart">
      <svg ref={D3IndicatorLineChart} />
    </div>
  );
}

D3IndicatorByLineChart.propTypes = {
  byLineDisplayData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      date: PropTypes.string,
      measure: PropTypes.string,
    }),
  ),
  measureInfo: PropTypes.shape({
    displayLabel: PropTypes.string,
  }),
  colorMapping: colorMappingProps,
};

D3IndicatorByLineChart.defaultProps = {
  byLineDisplayData: [],
  measureInfo: {},
  colorMapping: [],
};

export default D3IndicatorByLineChart;
