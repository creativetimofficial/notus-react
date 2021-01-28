import React, { useState, useEffect } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardTable from "components/Cards/CardTable.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";

export default function Dashboard() {
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures`)
      .then(response => response.json())
      .then(res => {
        const specialName = "Composite Score";
        const first = res.find(a => a.name === specialName);
        const theRestSorted = res.filter(a => a.name !== specialName).sort((a, b) => a.name.localeCompare(b.name));
        setMeasures([first, ...theRestSorted])
    })
  }, [])

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardTable measures={measures} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits measures={measures} />
        </div>
      </div>
    </>
  );
}
