import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import dataList from '../components/D3Container/DemoData';
import { DatastoreReducer, initialState } from './DatastoreReducer';

const axios = require('axios').default;

const searchUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/searchResults`);
const trendUrl = new URL(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures/trends`);
const devData = `${process.env.REACT_APP_DEV_DATA}`;

export const DatastoreContext = createContext(initialState);

export default function DatastoreProvider({ children }) {
  const [datastore, dispatch] = useReducer(DatastoreReducer, initialState);

  const datastoreActions = useMemo(() => ({
    setResults: (results) => dispatch({ type: 'SET_RESULTS', payload: results }),
    setTrends: (trends) => dispatch({ type: 'SET_TRENDS', payload: trends }),
  }), [dispatch]);

  useEffect(() => {
    if (devData === 'true') {
      datastoreActions.setResults(dataList);
    } else {
      const searchPromise = axios.get(searchUrl);
      const trendPromise = axios.get(trendUrl);
      Promise.all([searchPromise, trendPromise]).then((values) => {
        datastoreActions.setResults(values[0].data)
        datastoreActions.setTrends(values[1].data);
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
