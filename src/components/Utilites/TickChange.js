/* eslint-disable no-underscore-dangle */
const TickChange = () => {
  const ticksFound = document.querySelectorAll('.tick > text');
  const tickLinesFound = document.querySelectorAll('.tick > line');
  const tickLinesFoundX = document.querySelectorAll(
    '.d3-chart__datesX > .tick > line',
  );
  const DomainsFound = document.querySelectorAll('.domain');
  // D3 Chart
  // D3 Chart
  // D3 Chart
  for (let i = 0; i < tickLinesFoundX.length; i += 1) {
    tickLinesFoundX[i].style.display = 'none';
  }
  // Removes X-axis line
  DomainsFound[0].style.display = 'none';
  // Changes Numbers to Percent
  for (let i = 0; i < ticksFound.length; i += 1) {
    const tickInnerHtml = ticksFound[i].innerHTML;
    // Removes numbers of Y-axis on 10,30,50,70 and 90. Adds a Percent sign to the end of the rest.
    if (tickInnerHtml % 20 > 0) {
      ticksFound[i].style.display = 'none';
    } else {
      ticksFound[i].innerHTML = `${tickInnerHtml}%`;
    }
  }
  // Removes Ticks on 10,30,50,70 and 90.
  for (let i = 0; i < tickLinesFound.length; i += 1) {
    if (tickLinesFound[i].__data__ === 0) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    } else if (tickLinesFound[i].__data__ === 20) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    } else if (tickLinesFound[i].__data__ === 40) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    } else if (tickLinesFound[i].__data__ === 60) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    } else if (tickLinesFound[i].__data__ === 80) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    } else if (tickLinesFound[i].__data__ === 100) {
      tickLinesFound[i].classList.add('d3-chart__stroke-width-opacity');
    }

    // Removes Specific Ticks
    if (tickLinesFound[i].__data__ % 20 > 0) {
      tickLinesFound[i].remove();
    } else {
      tickLinesFound[i].innerHTML = `${tickLinesFound[i].__data__}%`;
    }
  }

  // D3 Chart Indicator By Line Chart
  // D3 Chart Indicator By Line Chart
  // D3 Chart Indicator By Line Chart

  // Revmove ticks above dates on x-axis 
  const tickLinesFoundLineChartX = document.querySelectorAll(
    '.d3-indicator-by-line-chart__datesX > .tick > line',
  );

  for (let i = 0; i < tickLinesFoundLineChartX.length; i += 1) {
    tickLinesFoundLineChartX[i].style.display = 'none';
  }
};

module.exports = { TickChange };
