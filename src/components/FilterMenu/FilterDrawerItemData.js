const domainsOfCare = {
  name: 'Domains of Care',
  text: 'Sample Text Re: domains of care',
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
  text: 'Sample Text Re: Star Ratings',
  options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
  values: ['1', '2', '3', '4', '5'],
}

const ncqaBonus = {
  name: 'NCQA Accreditation Bonus',
  text: 'Sample Text Re: NCQA',
  options: ['Accredited/Provisional', 'Interim', 'In-Process', 'Scheduled', 'None'],
  values: ['accredited', 'interim', 'inprocess', 'scheduled', 'none'],
}

const measureTypes = {
  name: 'Measure Types',
  text: 'Sample Text Re: Measures',
  options: ['Process', 'Outcome', 'Patient Experience (CPA,CPC)'],
  values: ['process', 'outcome', 'experience'],
}

const subMeasures = {
  name: 'Sub-Measures',
  text: 'Sample Text Re: submeasures',
  options: ['Show ONLY scores with sub or child measures'],
}

// A display option for the slider. Not used at the moment.
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

const filterDrawerItemData = {
  domainsOfCare,
  starRating,
  ncqaBonus,
  measureTypes,
  subMeasures,
  percentMarks,
};

export default filterDrawerItemData;
