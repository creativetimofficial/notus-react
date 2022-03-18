import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { colorMappingProps } from './D3Props';

function D3Chart({ displayData, colorMapping }) {
  // Binder for react to apply changes to the svg
  const D3LineChart = useRef();

  // Date Parser
  const parseDate = d3.timeParse('%Y-%m-%d');

  // Data manipulation
  const workingList = [];
  displayData.forEach((item) => workingList.push(item.measure));
  const measureList = Array.from(new Set(workingList));

  // Basic Styling consts to be used later
  const margin = {
    top: 50,
    right: 30,
    bottom: 75,
    left: 30,
  };
  const box = document.querySelector('.MuiGrid-item');
  const widthBase = (window.innerWidth || document.body.clientWidth);
  const width = box === null ? (widthBase * 0.8) : box.offsetWidth - 200;
  const height = 500;
  const tickCount = displayData.length / measureList.length;

  useEffect(() => {
    // Clear previous SVG
    d3.select(D3LineChart.current).selectAll('*').remove();

    // SVG constrol and also styling
    const svg = d3.select(D3LineChart.current)
      .attr('class', 'd3-chart__line-chart')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Generates labels and context for x axis
    const x = d3.scaleTime()
      // What data we're measuring
      .domain(d3.extent(displayData, (d) => parseDate(d.date.split('T')[0])))
      // The 'width' of the data
      .range([0, width + margin.left]);

    // X Axis labels and context
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(tickCount).tickFormat(d3.timeFormat('%d-%b-%Y')));

    // Generates Label and context for y axis
    d3.max(displayData, (d) => d.value);

    const y = d3.scaleLinear()
      .domain([0, 5])
      .range([height - margin.bottom, 0]);

    svg.append('g')
      .call(d3.axisLeft(y));

    // Grid
    // gridlines in x axis function
    function makeXGridlines() {
      return d3.axisBottom(x)
        .ticks(tickCount)
    }

    // gridlines in y axis function
    function makeYGridlines() {
      return d3.axisLeft(y)
        .ticks(10)
    }

    // add the X gridlines
    svg.append('g')
      .attr('class', 'axis-grid')
      .attr('transform', `translate(0,${height})`)
      .call(makeXGridlines()
        .tickSize(-(height))
        .tickFormat(''));

    // add the Y gridlines
    svg.append('g')
      .attr('class', 'axis-grid')
      .call(makeYGridlines()
        .tickSize(-width)
        .tickFormat(''));

    d3.selectAll('.axis-grid line').style('stroke', 'lightgray');

    // svg.append('text')
    //   .attr('x', width / 2)
    //   .attr('y', -30)
    //   .attr('text-anchor', 'middle')
    //   .attr('fint-size', '10px')
    //   .attr('fill', 'black')
    //   .text('demoData Graph (D3)');

    // Generates the actual line
    const line = d3.line()
      .curve(d3.curveCardinal)
      .x((d) => x(parseDate(d.date.split('T')[0])))
      .y((d) => y(d.value / 20));

    // Iterates through an array variation.
    if (measureList.length > 0) {
      measureList.forEach((measure) => {
        svg.append('path')
          .datum(displayData.filter((item) => item.measure === measure))
          .attr('fill', 'none')
          .attr('stroke', colorMapping.find((mapping) => mapping.measure === measure).color)
          .attr('opacity', '.50')
          .attr('stroke-width', 5)
          .attr('d', line)
          .on('mouseover', (event) => {
            d3.select(event.currentTarget).attr('opacity', '1');
          })
          .on('mouseout', (event) => {
            d3.select(event.currentTarget).attr('opacity', '.50');
          });
      });
    }
  });

  return (
    <div className="d3-chart">
      <svg ref={D3LineChart} />
    </div>
  );
}

D3Chart.propTypes = {
  displayData: PropTypes.arrayOf(
    PropTypes.shape({
      measure: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
  colorMapping: colorMappingProps,
};

D3Chart.defaultProps = {
  displayData: [],
  colorMapping: [],
};

export default D3Chart;
