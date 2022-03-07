export const initialState = {
  results: [],
  trends: [],
};

export const DatastoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
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
