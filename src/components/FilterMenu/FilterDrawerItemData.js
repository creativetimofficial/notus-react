const domainsOfCare = {
  name: 'Domains of Care',
  text: 'Sample Text Re: domains of care',
  options: ['E-measures', 'Access of Care', 'Experience of Care', 'Utilization & Risk Adjusted Utilization', 'Healthcare Descriptive Info'],
  function: '',
}

const starRating = {
  name: 'Star Rating',
  text: 'Sample Text Re: Star Ratings',
  options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
  function: '',
}

const ncqaBonus = {
  name: 'NCQA Accreditation Bonus',
  text: 'Sample Text Re: NCQA',
  options: ['Accredited/Provisional', 'Interim', 'In-Process', 'Scheduled', 'None'],
  function: '',
}

const measureTypes = {
  name: 'Measure Types',
  text: 'Sample Text Re: Measures',
  options: ['Process', 'Outcome', 'Patient Experience (CPA,CPC)'],
  function: '',
}

const subMeasures = {
  name: 'Sub-Measures',
  text: 'Sample Text Re: submeasures',
  options: ['Show ONLY scores with sub or child measures'],
  function: '',
}

const filterDrawerItemArray = [domainsOfCare, starRating, ncqaBonus, measureTypes, subMeasures];

export default filterDrawerItemArray;
