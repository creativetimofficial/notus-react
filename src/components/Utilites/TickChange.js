/* eslint-disable no-underscore-dangle */
const TickChange = (ChartType) => {
  // X-axis tick lines
  const ticksFoundOnXAxis = document.querySelectorAll(
    '.d3-chart__datesX > .tick > line',
  );
  // Y-axis tick lines
  const ratingPercentTickLinesFoundY = document.querySelectorAll(
    '.d3-chart__ratingY > .tick > line',
  );
  // Y-axis text
  const ratingPercentTextFoundY = document.querySelectorAll(
    '.d3-chart__ratingY > .tick > text',
  );
  // X-axis Y-axis
  const DomainsFound = document.querySelectorAll('.domain');

  if (ChartType === 'D3Chart') {
    // D3 Chart
    // D3 Chart
    // D3 Chart

    // Removes numbers of Y-axis on 10,30,50,70 and 90.
    for (let i = 0; i < ratingPercentTextFoundY.length; i += 1) {
      const ratingPercentTextFoundYInnerHtml = ratingPercentTextFoundY[i].innerHTML;
      if (ratingPercentTextFoundYInnerHtml % 20 > 0) {
        ratingPercentTextFoundY[i].style.display = 'none';
      } else {
        // Adds a Percent sign to the end of the rest.
        ratingPercentTextFoundY[i].innerHTML = `${ratingPercentTextFoundYInnerHtml}%`
      }
    }
    // Removes ticks above dates on x-axis.
    for (let i = 0; i < ticksFoundOnXAxis.length; i += 1) {
      ticksFoundOnXAxis[i].style.display = 'none';
    }

    // Removes ticks of y-axis on 10, 30, 50, 70 and 90.
    for (let i = 0; i < ratingPercentTickLinesFoundY.length; i += 1) {
      if (ratingPercentTickLinesFoundY[i].__data__ % 20 > 0) {
        ratingPercentTickLinesFoundY[i].style.display = 'none';
      }
    }

    // Removes X-axis line
    DomainsFound[0].style.display = 'none';
  } else {
    // D3 Chart Indicator By Line Chart
    // D3 Chart Indicator By Line Chart
    // D3 Chart Indicator By Line Chart

    // X-axis tick lines
    const tickLinesFoundLineChartX = document.querySelectorAll(
      '.d3-indicator-by-line-chart__datesX > .tick > line',
    );

    // Y-axis tick lines
    const ratingPercentTickLinesFoundLineChartY = document.querySelectorAll(
      '.d3-indicator-by-line-chart__ratingY > .tick > line',
    );
    // Y-axis text
    const ratingPercentTextFoundLineChatY = document.querySelectorAll(
      '.d3-indicator-by-line-chart__ratingY > .tick > text',
    );
    // Remove ticks above dates on x-axis
    for (let i = 0; i < tickLinesFoundLineChartX.length; i += 1) {
      tickLinesFoundLineChartX[i].style.display = 'none';
    }

    // Removes X-axis line
    DomainsFound[0].style.display = 'none';

    // Removes ticks of y-axis on 10, 30, 50, 70 and 90.
    for (let i = 0; i < ratingPercentTickLinesFoundLineChartY.length; i += 1) {
      if (ratingPercentTickLinesFoundLineChartY[i].__data__ % 20 > 0) {
        ratingPercentTickLinesFoundLineChartY[i].style.display = 'none';
      }
    }

    // Removes numbers of Y-axis on 10,30,50,70 and 90.
    for (let i = 0; i < ratingPercentTextFoundLineChatY.length; i += 1) {
      const ratingPercentTextFoundLineChatYInnerHtml = ratingPercentTextFoundLineChatY[i].innerHTML;
      if (ratingPercentTextFoundLineChatYInnerHtml % 20 > 0) {
        ratingPercentTextFoundLineChatY[i].style.display = 'none';
      } else {
        // Adds a Percent sign to the end of the rest.
        ratingPercentTextFoundLineChatY[i].innerHTML = `${ratingPercentTextFoundLineChatYInnerHtml}%`
      }
    }
  }
};

module.exports = { TickChange };
