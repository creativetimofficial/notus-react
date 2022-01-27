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

        const dataSet = d3.group(dateDemoData, item => item.name);

        //Basic Styling consts to be used later
        const margin = { top: 50, right: 30, bottom: 50, left: 30 };
        const width = parseInt(d3.select('#d3-line-chart').style('width'));
        const height = parseInt(d3.select('#d3-line-chart').style('height'));
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;


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

            d3.selectAll(".axis-grid line").style("stroke","lightgray")

        //Scatterplot and tooltips

        // const toolTip = d3.select("body").append("div")
        //     .attr("class", "tooltip")
        //     .style("opacity", 0);

        // svg.selectAll("dot")
        //     .data([...dataList])
        //     .enter().append("circle")
        //     .attr("r", 5)
        //     .attr("cx", function (d) { return x(d.date); })
        //     .attr("cy", function (d) { return y(d.close); })
        //     .on("mouseover", function (event, d) {
        //         toolTip.transition()
        //             .duration(200)
        //             .style("opacity", .9);
        //             toolTip.html(parseDate(d.date) )
        //             .style("left", (event.pageX) + "px")
        //             .style("top", (event.pageY - 28) + "px");
        //     })
        //     .on("mouseout", function (d) {
        //         toolTip.transition()
        //             .duration(500)
        //             .style("opacity", 0);
        //     });

        //Focus Line?
        // const focus = svg.append("g")
        //     .attr("class", "focus")
        //     .style("display", "none");

        // focus.append("line").attr("class", "lineHover")
        //     .style("stroke", "#999")
        //     .attr("stroke-width", 1)
        //     .style("shape-rendering", "crispEdges")
        //     .style("opacity", 0.5)
        //     .attr("y1", -height)
        //     .attr("y2", 0);

        // focus.append("text").attr("class", "lineHoverDate")
        //     .attr("text-anchor", "middle")
        //     .attr("font-size", 12);

        // const overlay = svg.append("rect")
        //     .attr("class", "overlay")
        //     .attr("x", margin.left)
        //     .attr("width", width - margin.right - margin.left)
        //     .attr("height", height)

        // );
        // Generates the actual line
        const line = d3.line()
            .curve(d3.curveCardinal)
            .x(d => x(parseDate(d.date)))
            .y(d => y(d.value));

        //Iterates through an array variation.
        nameList.forEach((name) => {
            svg.append('path')
                .datum(dateDemoData.filter((item) => item.name === name))
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                .attr('d', line)
            console.log("fired");
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

        //Experimental Z
        const z = d3.scaleOrdinal(d3.schemeCategory10);

        const formatDate = d3.timeFormat("%Y-%m-%d"),
            bisectDate = d3.bisector(d => d.date).left,
            formatValue = d3.format(",.0f"),
            data = [...dataList];

        //     const update = (input, speed) => {

        //         var copy = nameList.filter(f => f.includes(input))

        //         var cities = copy.map(function (id) {
        //             return {
        //                 id: id,
        //                 values: data.map(d => { return { date: d.date, value: +d[id] } })
        //             };
        //         });

        //         y.domain([
        //             d3.min(cities, d => d3.min(d.date, c => c.value)),
        //             d3.max(cities, d => d3.max(d.date, c => c.value))
        //         ]).nice();

        //         svg.selectAll(".y-axis").transition()
        //             .duration(speed)
        //             .call(d3.axisLeft(y).tickSize(-width + margin.right + margin.left))

        //         var city = svg.selectAll(".cities")
        //             .data(cities);

        //         city.exit().remove();

        //         city.enter().insert("g", ".focus").append("path")
        //             .attr("class", "line cities")
        //             .style("stroke", d => z(d.id))
        //             .merge(city)
        //             .transition().duration(speed)
        //             .attr("d", d => line(d.values))

        //         tooltip(copy);
        //     }


        //     const tooltip = (copy) => {

        //         var labels = focus.selectAll(".lineHoverText")
        //             .data(copy)

        //         labels.enter().append("text")
        //             .attr("class", "lineHoverText")
        //             .style("fill", d => z(d))
        //             .attr("text-anchor", "start")
        //             .attr("font-size", 12)
        //             .attr("dy", (_, i) => 1 + i * 2 + "em")
        //             .merge(labels);

        //         var circles = focus.selectAll(".hoverCircle")
        //             .data(copy)

        //         circles.enter().append("circle")
        //             .attr("class", "hoverCircle")
        //             .style("fill", d => z(d))
        //             .attr("r", 2.5)
        //             .merge(circles);

        //         svg.selectAll(".overlay")
        //             .on("mouseover", function () { focus.style("display", null); })
        //             .on("mouseout", function () { focus.style("display", "none"); })
        //             .on("mousemove", mousemove);
        //     }

        //     const mousemove = () => {

        //         var x0 = x.invert(d3.pointer()[0]),
        //             i = bisectDate(data, x0, 1),
        //             d0 = data[i - 1],
        //             d1 = data[i],
        //             d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        //         focus.select(".lineHover")
        //             .attr("transform", "translate(" + x(d.date) + "," + height + ")");

        //         focus.select(".lineHoverDate")
        //             .attr("transform",
        //                 "translate(" + x(d.date) + "," + (height + margin.bottom) + ")")
        //             .text(formatDate(d.date));

        //         focus.selectAll(".hoverCircle")
        //             .attr("cy", e => y(d[e]))
        //             .attr("cx", x(d.date));

        //         focus.selectAll(".lineHoverText")
        //             .attr("transform",
        //                 "translate(" + (x(d.date)) + "," + height / 2.5 + ")")
        //             .text(e => e + " " + "º" + formatValue(d[e]));

        //         x(d.date) > (width - width / 4)
        //             ? focus.selectAll("text.lineHoverText")
        //                 .attr("text-anchor", "end")
        //                 .attr("dx", -10)
        //             : focus.selectAll("text.lineHoverText")
        //                 .attr("text-anchor", "start")
        //                 .attr("dx", 10)
        //     }
    });

    return (
        <div id='d3-line-chart'>
            <svg ref={D3LineChart}></svg>
        </div>
    )
};

export default D3Chart;