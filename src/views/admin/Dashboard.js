import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardTable from "components/Cards/CardTable.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardTable />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
      </div>
    </>
  );
}
