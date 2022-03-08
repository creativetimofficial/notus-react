export const initialState = {
  results: [], // All results for the last several days, per measure.
  trends: [],
  currentResults: [], // Results for the most recent day for each measure).
};

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
      return {
        ...state,
        results: action.payload,
        currentResults: Object.values(workingList),
      }
    }
    case 'SET_TRENDS':
      return {
        ...state,
        trends: action.payload,
      }
    default:
      return state;
  }
}
