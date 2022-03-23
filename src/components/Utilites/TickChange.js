/* eslint-disable no-underscore-dangle */
const TickChange = () => {
  const ticksFound = document.querySelectorAll('.tick > text');
  const tickLinesFound = document.querySelectorAll('.tick > line');
  const tickLinesFoundX = document.querySelectorAll(
    '.d3-chart__datesX > .tick > line'
  );
  const DomainsFound = document.querySelectorAll('.domain');
  // D3 Chart
  // D3 Chart
  // D3 Chart
  for (let i = 0; i < tickLinesFoundX.length; i += 1) {
    tickLinesFoundX[i].style.display = 'none';
  }
  //   Making the X-AXIS DISAPPEAR
  DomainsFound[0].style.display = 'none';
  // Changes Numbers to Percent
  for (let i = 0; i < ticksFound.length; i += 1) {
    const tickInnerHtml = ticksFound[i].innerHTML;
    // Removes numbers of Y-axis on 10,30,50,70 and 90.
    if (tickInnerHtml === '10') {
      ticksFound[i].style.display = 'none';
    } else if (tickInnerHtml === '30') {
      ticksFound[i].style.display = 'none';
    } else if (tickInnerHtml === '50') {
      ticksFound[i].style.display = 'none';
    } else if (tickInnerHtml === '70') {
      ticksFound[i].style.display = 'none';
    } else if (tickInnerHtml === '90') {
      ticksFound[i].style.display = 'none';
    }

    // Changes numbers of Y-axis on 20,40,60,80 and 100 to %.

    if (tickInnerHtml === '20') {
      ticksFound[i].innerHTML = '20%';
    } else if (tickInnerHtml === '40') {
      ticksFound[i].innerHTML = '40%';
    } else if (tickInnerHtml === '60') {
      ticksFound[i].innerHTML = '60%';
    } else if (tickInnerHtml === '80') {
      ticksFound[i].innerHTML = '80%';
    } else if (tickInnerHtml === '100') {
      ticksFound[i].innerHTML = '100%';
    } else if (tickInnerHtml === '0') {
      ticksFound[i].innerHTML = '0%';
    }
  }
  // Removes Ticks on 10,30,50,70 and 90.
  for (let i = 0; i < tickLinesFound.length; i += 1) {
    if (tickLinesFound[i].__data__ === 0) {
      // tickLinesFound[i].style.color = 'white'
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
    if (tickLinesFound[i].__data__ === 10) {
      tickLinesFound[i].remove();
    } else if (tickLinesFound[i].__data__ === 30) {
      tickLinesFound[i].remove();
    } else if (tickLinesFound[i].__data__ === 50) {
      tickLinesFound[i].remove();
    } else if (tickLinesFound[i].__data__ === 70) {
      tickLinesFound[i].remove();
    } else if (tickLinesFound[i].__data__ === 90) {
      tickLinesFound[i].remove();
    }
  }

  // D3 Chart Indicator By Line Chart
  // D3 Chart Indicator By Line Chart
  // D3 Chart Indicator By Line Chart
  const tickLinesFoundLineChartX = document.querySelectorAll(
    '.d3-indicator-by-line-chart__datesX > .tick > line'
  );
  for (let i = 0; i < tickLinesFoundLineChartX.length; i += 1) {
    tickLinesFoundLineChartX[i].style.display = 'none';
  }
};

module.exports = { TickChange };
