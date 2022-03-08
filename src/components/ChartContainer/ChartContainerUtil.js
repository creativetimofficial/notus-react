export const refineDisplayData = (data, filters, measureList) => {
  console.log(data);
  console.log(filters);
  console.log(measureList);
  const initialData = data;
  let workingData = [];
  const filterArray = filters;
  if (filterArray.length === 0) {
    workingData = initialData;
  } else if (filterArray.length === measureList.length) {
    workingData = [];
  } else {
    filterArray.forEach((filterItem) => { // Handles Filtering by measure
      if (filterItem.type === 'measure') {
        initialData.forEach((item) => {
          if (item.measure !== filterItem.value) { workingData.push(item) }
        });
      } // Add logic in here for various filter types
    })
  }
  return workingData;
};

export function generateFilterPaneValues(filterItem) {
  return {
    value: filterItem.measure,
    type: 'measure',
    included: filterItem.initialPopulation - filterItem.exclusions,
    eligible: filterItem.initialPopulation,
    numerator: filterItem.numerator,
    denominator: filterItem.denominator,
    exclusions: filterItem.exclusions,
  }
}

export function generateMeasureList(datastore) {
  const workingList = {};
  datastore.results.forEach((item) => {
    if (workingList[item.measure] === undefined
      || item.date > workingList[item.measure].date) {
      workingList[item.measure] = item;
    }
  });
  return Object.values(workingList);
}
