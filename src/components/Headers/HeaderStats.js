import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Overall Score"
                  statTitle="4.5"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last year"
                  statIconName="fas fa-smile"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="HbA1c - Less than 8%"
                  statTitle="3.5"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-500"
                  statDescripiron="since last year"
                  statIconName="fas fa-meh"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Diabetes - Blood Pressure"
                  statTitle="2.5"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="since last year"
                  statIconName="fas fa-frown"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Childhood Immunizations"
                  statTitle="5"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="since last year"
                  statIconName="fas fa-smile"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
