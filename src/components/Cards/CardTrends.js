import React, {
  useContext, useState, useEffect,
} from 'react';
import Typography from '@mui/material/Typography';
import { DatastoreContext } from '../../layouts/Dashboard';

export default function CardTrends() {
  const { datastore, setDatastore } = useContext(DatastoreContext);
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    setTrendData(datastore.trends);
  }, [datastore]);

  const percentChange = trendData[0] ? trendData[0].changePercent : 0;
  const measure = trendData[0] ? trendData[0].measure : '';
  const displayValue = `${measure} : ${percentChange}`
  return (
    <>
      <Typography variant="subtitle1" align="center">Impacts and Trends</Typography>
      <Typography>
        {displayValue}
      </Typography>
    </>
  );
}
