import React, { useEffect } from "react";
import Chart from "chart.js";

export default function CardBarChart({ labels, data, title, xAxis, yAxis, measures, history }) {
  // eslint-disable-next-line
  // linter complains about needing this in a useCallback hook
  // but page never re-renders currently
  const goToClickedMeasure = (event, array) => {
    if(array.length && measures){
      const name = measures[array[0]._index].name;
      history.push(`/measures/${name}`)
    }
  }

  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: data, 
            barThickness: 30,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        onClick: goToClickedMeasure,
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: xAxis,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: yAxis,
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById(`bar-chart-${title}`).getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [labels, data, xAxis, yAxis, title, goToClickedMeasure]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              {/*<h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                Performance
              </h6>*/}
              <h2 className="text-gray-800 text-xl font-semibold">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id={`bar-chart-${title}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
