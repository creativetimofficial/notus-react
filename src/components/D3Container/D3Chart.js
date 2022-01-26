import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import { dataList } from './DemoData';

function D3Chart() {

    const D3LineChart = useRef();

    useEffect(() => {
        //engage data here

        const dateDemoData = dataList;

        //Date Parser
        const parseDate = d3.timeParse('%Y-%m-%d')

        //Data manipulation
        const dataSet = d3.group(dateDemoData, item => item.name);

        console.log(dataSet);
        dataSet.forEach((entry) => console.log(entry));

        //Basic Styling consts to be used later
        const margin = { top: 50, right: 30, bottom: 50, left: 30 };
        const width = parseInt(d3.select('#d3-line-chart').style('width')) - margin.left - margin.right;
        const height = parseInt(d3.select('#d3-line-chart').style('height'));

        //SVG constrol and also styling
        const svg = d3.select(D3LineChart.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.bottom + margin.top)
            .style('background-color', 'white')
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        //Generates labels and context for x axis

        const x = d3.scaleTime()
            //What data we're measuring
            .domain(d3.extent(dateDemoData, (d) => parseDate(d.date)))
            //The 'width' of the data
            .range([0, width]);

        svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x));


        //Generates Label and context for y axis
        const max = d3.max(dateDemoData, (d) => d.value);

        const y = d3.scaleLinear()
            .domain([0, max])
            .range([height, 0]);

        svg.append('g')
            .call(d3.axisLeft(y));


        // dataSet.forEach(

        // );
        // Generates the actual line
        svg.append('path')
            .datum(dateDemoData)
            .attr('fill', 'none')
            .attr('stroke', 'black')
            .attr('stroke-width', 2)
            .attr('d', d3.line()
                .x((d) => x(parseDate(d.date)))
                .y((d) => y(d.value))
            );

        //Graph Title. Literally has to be placed on the graph using X and Y values
        svg.append('text')
            //X position
            .attr('x', (width / 2))
            //Y position
            .attr('y', (-30))
            //Styling
            .attr('text-anchor', 'middle')
            .attr('fint-size', '10px')
            .attr('fill', 'black')
            //Text
            .text('demoData Graph (D3)')


    });

    return (
        <div id='d3-line-chart'>
            <svg ref={D3LineChart}></svg>
        </div>
    )
};

export default D3Chart;