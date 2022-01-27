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
        let workingList = [];
        dateDemoData.forEach((item) => workingList.push(item.name));
        const nameList = [...new Set(workingList)];

        //Basic Styling consts to be used later
        const margin = { top: 50, right: 30, bottom: 50, left: 30 };
        const width = parseInt(d3.select('#d3-line-chart').style('width'));
        const height = parseInt(d3.select('#d3-line-chart').style('height'));

        //SVG constrol and also styling
        const svg = d3.select(D3LineChart.current)
            .attr('width', width)
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

        //X Axis labels and context
        svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d-%b-%Y")));

        //Generates Label and context for y axis
        const max = d3.max(dateDemoData, (d) => d.value);

        const y = d3.scaleLinear()
            .domain([0, max])
            .range([height, 0]);

        svg.append('g')
            .call(d3.axisLeft(y));

        //Grid
        // gridlines in x axis function
        function make_x_gridlines() {
            return d3.axisBottom(x)
                .ticks(10)
        }

        // gridlines in y axis function
        function make_y_gridlines() {
            return d3.axisLeft(y)
                .ticks(10)
        }

        // add the X gridlines
        svg.append("g")
            .attr("class", "axis-grid")
            .attr("transform", "translate(0," + height + ")")
            .call(make_x_gridlines()
                .tickSize(-height)
                .tickFormat("")
            )

        // add the Y gridlines
        svg.append("g")
            .attr("class", "axis-grid")
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat("")
            )

        d3.selectAll(".axis-grid line").style("stroke", "lightgray")

        // );
        // Generates the actual line
        const line = d3.line()
            .curve(d3.curveCardinal)
            .x(d => x(parseDate(d.date)))
            .y(d => y(d.value));


        var div = d3.select(D3LineChart.current).append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        //Iterates through an array variation.
        nameList.forEach((name) => {
            svg.append('path')
                .datum(dateDemoData.filter((item) => item.name === name))
                .attr('fill', 'none')
                .attr('stroke', 'lightgray')
                .attr('stroke-width', 2)
                .attr('d', line)
                .on("mouseover", (event) => {
                    console.log(this)
                    console.log(event.currentTarget)
                    console.log(this === event.currentTarget);
                    d3.select(this).attr("stroke", "darkblue");
                })
                .on("mouseout", (event) => {
                    console.log(this === event.currentTarget);
                    d3.select(this).attr("stroke", "lightgray");
                });
        });
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

        //Experimental

    });

    return (
        <div id='d3-line-chart'>
            <svg ref={D3LineChart}></svg>
        </div>
    )
};

export default D3Chart;