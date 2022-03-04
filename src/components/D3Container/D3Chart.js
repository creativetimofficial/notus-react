import React, { useEffect, useState, useRef, useContext } from "react";
import * as d3 from "d3";
import { dataList } from "./DemoData";
import {
  currentFilterContext,
  displayDataContext,
  firstRenderContext,
} from "./D3Container";
import "./D3Chart.css";
const axios = require("axios").default;

function D3Chart() {
  //Binder for react to apply changes to the svg
  const D3LineChart = useRef();

  const { currentFilters, setCurrentFilters } =
    useContext(currentFilterContext);
  const { displayData, setDisplayData } = useContext(displayDataContext);
  const { firstRender, setFirstRender } = useContext(firstRenderContext);
  const [data, setData] = useState([]);
  const [memberId, setMemberId] = useState("");
  const [measurementType, setMeasurementType] = useState("drre");
  const [xCord, setXCord] = useState("");
  const [yCord, setYCord] = useState("");
  const [lineName, setLineName] = useState("");
  console.log(lineName);
  const searchUrl = new URL(
    `${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/search`
  );

  useEffect(() => {
    if (memberId) {
      searchUrl.searchParams.append("memberId", memberId);
    }
    if (measurementType) {
      searchUrl.searchParams.append("measurementType", measurementType);
    }

    axios
      .get(searchUrl.href)
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    //engage data here

    //Date Parser
    const parseDate = d3.timeParse("%Y-%m-%d");

    //Data manipulation
    let workingList = [];
    displayData.forEach((item) => workingList.push(item.measure));
    const measureList = [...new Set(workingList)];

    //Basic Styling consts to be used later
    const margin = { top: "50", right: 30, bottom: "75", left: 50 };
    const width = parseInt(d3.select("#d3-line-chart").style("width"));
    const height = 800;

    //Clear previous SVG
    d3.select(D3LineChart.current).selectAll("*").remove();

    //SVG control and also styling
    const svg = d3
      .select(D3LineChart.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Generates labels and context for x axis

    const x = d3
      .scaleTime()
      //What data we're measuring
      .domain(d3.extent(displayData, (d) => parseDate(d.date)))
      //The 'width' of the data
      .range([0, width + margin.left]);

    //X Axis labels and context
    svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .attr("class", "baseLineXAxis")

      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d-%b-%Y")));

    //Generates Label and context for y axis
    const max = d3.max(displayData, (d) => d.value);

    const y = d3
      .scaleLinear()
      .domain([0, 5])
      .range([height - margin.bottom, 0]);

    svg.append("g").call(d3.axisLeft(y)).attr("class", "baseLineYAxis");

    //Grid
    // gridlines in x axis function
    function make_x_gridlines() {
      return d3.axisBottom(x).ticks(10);
    }

    // gridlines in y axis function
    function make_y_gridlines() {
      return d3.axisLeft(y).ticks(10);
    }

    // add the X gridlines
    svg
      .append("g")
      .attr("class", "axis-grid")
      .attr("transform", "translate(0," + height + ")")
      .attr("class", "tomatoeBlue")

      .call(make_x_gridlines().tickSize(-height).tickFormat(""));

    // add the Y gridlines
    svg
      .append("g")
      .attr("class", "axis-grid")
      .call(make_y_gridlines().tickSize(-width).tickFormat(""))
      .attr("display", "none");

    d3.selectAll(".axis-grid line").style("stroke", "lightgray");

    // Graph Title. Literally has to be placed on the graph using X and Y values

    svg
      .append("text")
      //X position
      .attr("x", width / 2)
      //Y position
      .attr("y", -30)
      //Styling
      .attr("text-anchor", "middle")
      .attr("font-size", "1.3rem")
      .attr("fill", "black")
      //Text
      .text("Demo Data Graph (D3)");

    // Generates the actual line
    const line = d3
      .line()
      .curve(d3.curveCardinal)
      .x((d) => x(parseDate(d.date)))
      .y((d) => y(d.value));
    // Tool Tips
    var tooltip = d3.select("body").append("div").attr("class", "tooltip");

    //Iterates through an array variation.
    if (measureList.length > 0) {
      measureList.forEach((measure) => {
        svg
          .append("path")
          .datum(displayData.filter((item) => item.measure === measure))
          .attr("class", "lineOnChart")
          .attr("d", line)
          .style("width", function (d) {
            return x(d) + "px";
          })

          .on("mouseover", (d) => {
            JSON.stringify(d);
            console.log(d);
            return tooltip
              .style("visibility", "visible")
              .style("top", d.pageY - 10 + "px")
              .style("left", d.pageX + 10 + "px");
          })
          .on("mousemove", (event) => {
            // console.log(event.x);
            // let XCord = event.x;
            // let YCord = event.y;
            // if (XCord >= 70 && XCord <= 300) {
            //   console.log("first section");
            // } else if (XCord >= 301 && XCord <= 531) {
            //   console.log("second section");
            // } else if (XCord >= 532 && XCord <= 762) {
            //   console.log("third section");
            // }
            return tooltip
              .html(event)
              .text(
                `${event.target.__data__[0].measure} Value: "${event.target.__data__[0].value}" Date: "${event.target.__data__[0].date}"`
              )
              .style("top", event.pageY - 10 + "px")
              .style("left", event.pageX + 10 + "px");
          })
          .on("mouseout", (event) => {
            return tooltip.style("visibility", "hidden");
          });
      });
    }
  }, [measurementType, memberId, displayData]);

  return (
    <div id="d3-line-chart">
      <svg ref={D3LineChart}></svg>
    </div>
  );
}

export default D3Chart;
