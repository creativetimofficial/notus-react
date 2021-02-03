import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({ measures }) {
  const topFourMeasures = measures[0] ? measures.slice(0, 4) : null;
  const setDetails = (rating) => {
    let face = "frown";
    let color = "red";
    if (rating > 2 && rating < 4) {
      face = "meh";
      color = "orange";
    } else if (rating >= 4){
      face = "smile";
      color = "green";
    }
    return [face, color];
  }

  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              { topFourMeasures ? topFourMeasures.map(measure => {
                const [face, color] = setDetails(measure.rating);
                return (
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4" key={measure.id}>
                    <CardStats
                      statSubtitle={measure.displayName}
                      statTitle={measure.rating.toString()}
                      statArrow="up"
                      statPercent="12"
                      statPercentColor="text-green-500"
                      statDescripiron="Since last year"
                      statIconName={`fas fa-${face}`}
                      statIconColor={`bg-${color}-500`}
                    />
                  </div>
              )
              }) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
