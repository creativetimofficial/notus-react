import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { resultList, trendList } from '../test/data/DemoData';
import { DatastoreReducer, initialState } from './DatastoreReducer';

const axios = require('axios').default;

const searchUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/searchResults`);
const trendUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/trends`);
const infoUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/info`);
const devData = `${process.env.REACT_APP_DEV_DATA}`;

export const DatastoreContext = createContext(initialState);

export default function DatastoreProvider({ children }) {
  const [datastore, dispatch] = useReducer(DatastoreReducer, initialState);

  const datastoreActions = useMemo(() => ({
    setResults: (results) => dispatch({ type: 'SET_RESULTS', payload: results }),
    setTrends: (trends) => dispatch({ type: 'SET_TRENDS', payload: trends }),
    setInfo: (info) => dispatch({ type: 'SET_INFO', payload: info }),
  }), [dispatch]);

  useEffect(() => {
    if (devData === 'true') {
      datastoreActions.setResults(resultList);
      datastoreActions.setTrends(trendList);
    } else {
      axios.get(infoUrl)
        .then((res) => {
          datastoreActions.setInfo(res.data);
        });
      axios.get(searchUrl)
        .then((res) => {
          datastoreActions.setResults(res.data);
        });
      axios.get(trendUrl)
        .then((res) => {
          datastoreActions.setTrends(res.data);
        });
    }
  }, [datastoreActions]);

  const reducerValue = useMemo(() => ({
    datastore, datastoreActions,
  }), [datastore, datastoreActions]);

  return (
    <DatastoreContext.Provider value={reducerValue}>
      {children}
    </DatastoreContext.Provider>
  )
}

DatastoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
