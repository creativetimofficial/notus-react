const domainsOfCare = {
  name: 'Domains of Care',
  tip: 'We only support Effectiveness of Care and Electronic Clinical Data System measures at the moment.',
  options: [
    'Electronic Clinical Data System',
    'Effectiveness of Care',
    // 'Experience of Care',
    // 'Access/Availability of Care',
    // 'Utilization & Risk Adjusted Utilization',
    // 'Healthcare Descriptive Info',
  ],
  values: ['ECDS', 'EOC'], // 'XOC', 'AOC', 'URAU', 'HDI'],
}

const starRating = {
  name: 'Star Rating',
  tip: 'Each star rating also includes the next half star. So 2 Stars would also cover 2.5 stars.',
  options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
  values: [1, 2, 3, 4, 5],
}

const ncqaBonus = {
  name: 'NCQA Accreditation Bonus',
  tip: 'Coming soon.',
  options: ['Accredited/Provisional', 'Interim', 'In-Process', 'Scheduled', 'None'],
  values: ['accredited', 'interim', 'inprocess', 'scheduled', 'none'],
}

const measureTypes = {
  name: 'Measure Types',
  tip: 'Coming soon.',
  options: ['Process', 'Outcome', 'Patient Experience (CPA,CPC)'],
  values: ['process', 'outcome', 'experience'],
}

const subMeasures = {
  name: 'Sub-Measures',
  tip: 'Coming soon.',
  options: ['Show ONLY scores with sub or child measures'],
}

const percentMarks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
]

const sumCalculator = (filter) => {
  let sum = 0;
  if (filter.domainsOfCare.length < domainsOfCare.options.length) {
    sum += filter.domainsOfCare.length;
  }
  if (filter.stars.length < starRating.options.length) {
    sum += filter.stars.length;
  }
  if (filter.percentRange[0] > 0) {
    sum += 1;
  }
  if (filter.percentRange[1] < 100) {
    sum += 1;
  }

  return sum;
}

const filterDrawerItemData = {
  domainsOfCare,
  starRating,
  ncqaBonus,
  measureTypes,
  subMeasures,
  percentMarks,
  sumCalculator,
};

export default filterDrawerItemData;
