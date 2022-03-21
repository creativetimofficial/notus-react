const TickChange = () => {
  const ticksFound = document.querySelectorAll('.tick > text');
  const YlineFound = document.querySelectorAll('.d3-chart__ratingY')[0].childNodes;
  console.log('YlineFound', YlineFound);
//   for (let i = 0; i < YlineFound.length; i++) {}

  for (let i = 0; i < ticksFound.length; i++) {
    const tickInnerHtml = ticksFound[i].innerHTML;

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
    ticksFound[0].innerHTML = `${ticksFound[0].innerHTML}`;

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
}

module.exports = { TickChange };
