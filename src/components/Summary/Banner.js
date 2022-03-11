import React, { useContext } from 'react';
import { DatastoreContext } from '../../context/DatastoreProvider';

function Banner() {
  const { datastore } = useContext(DatastoreContext);
  return (
    <div className="HEDIS_Dashboard_Container">
      <h1 className="text-left mx-4 text-5xl font-semibold">
        HEDIS Dashboard
      </h1>
      <p className="text-left mx-4 text-xl font-semibold mb-1">
        {`Last Updated: ${datastore.lastUpdated}`}
      </p>
      <p className="text-left mx-4 text-xl">
        Descriptive text about this section - gratuitous octopus niacin, sodium
        glutimate.
      </p>
    </div>
  );
}

export default Banner;
