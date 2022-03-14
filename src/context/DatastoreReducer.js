export const initialState = {
  results: [], // All results for the last several days, per measure.
  trends: [],
  currentResults: [], // Results for the most recent day for each measure.
  info: {},
  lastUpdated: 'Updating now...',
};

const monthOpt = { month: 'short', day: '2-digit' };
const yearOpt = { year: 'numeric' };
const timeOpt = { hour: '2-digit', minute: '2-digit' };
const timeStamper = (givenDate, options) => givenDate.toLocaleString('default', options);

const updateTimestamp = () => {
  const now = new Date();
  return `${timeStamper(now, monthOpt)} ${timeStamper(now, yearOpt)}, ${timeStamper(now, timeOpt)}`;
}

export const DatastoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESULTS': {
      const workingList = {};
      action.payload.forEach((item) => {
        if (workingList[item.measure] === undefined
          || item.date > workingList[item.measure].date) {
          workingList[item.measure] = item;
        }
      });
      const currentResults = Object.values(workingList)
        .sort((a, b) => {
          if (a.measure === 'composite') return -1;
          if (b.measure === 'composite') return 1;
          return a.measure > b.measure ? 1 : -1;
        });
      return {
        ...state,
        results: action.payload,
        currentResults,
        lastUpdated: updateTimestamp(),
      }
    }
    case 'SET_TRENDS':
      return {
        ...state,
        trends: action.payload,
        lastUpdated: updateTimestamp(),
      }
    case 'SET_INFO':
      return {
        ...state,
        info: action.payload,
        lastUpdated: updateTimestamp(),
      }
    default:
      return state;
  }
}
