import React, { useState } from "react";
import StarRating from "./StarRating";

const RatingsTrends = () => {
  const [starRating, setStarRating] = useState(3.5);
  const [aisCompliance, setAisCompliance] = useState("10");
  const [ddrCompliance, setDdrCompliance] = useState("5");
  const [projectedYearlyBonus, setprojectedYearlyBonus] = useState(40);
  return (
    <div className="HEDIS_Dashboard_RatingsTrends_Container">
      <h1 className="text-left mx-4 text-4xl font-semibold mt-16">
        Ratings & Trends
      </h1>
      <p className="text-left mx-4 text-lg">
        Descriptive text about this section and impacts and events that
        contribute to star rating ...
      </p>
      <div className="flex mt-12">
        <div className="flex flex-col text-center mt-0 width-25 ">
          <p className="text-center font-semibold text-lg">Star Rating</p>
          <div className="mt-2">
            <StarRating rating={starRating} />
          </div>
        </div>
        <div className="border-grey h-20 my-auto"></div>
        <div className="flex flex-col justify-center width-25">
          <p className="text-center font-semibold text-lg mt-0">
            AIS, % Compliance
          </p>
          {aisCompliance.includes("-") ? (
            <div className="flex justify-center">
              <i className="fa fa-arrow-up text-2xl mx-4 text-red-500 my-auto" />
              <p className="text-3xl text-red-500 mt-2 mb-2">
                {aisCompliance}%
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <i className="fa fa-arrow-up text-2xl mx-4 text-green-500 my-auto" />
              <p className="text-3xl text-green-500 mt-2 mb-2">
                {aisCompliance}%
              </p>
            </div>
          )}

          <p className="text-center font-semibold text-lg">over past 30 days</p>
        </div>
        <div className="border-grey h-20 my-auto"></div>

        <div className="flex flex-col justify-center width-25">
          <p className="text-center font-semibold text-lg mt-0">
            DDR, % Compliance
          </p>
          {ddrCompliance.includes("-") ? (
            <div className="flex justify-center">
              <i className="fa fa-arrow-up text-2xl mx-4 text-red-500 my-auto" />
              <p className="text-3xl text-red-500 mt-2 mb-2">
                {ddrCompliance}%
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <i className="fa fa-arrow-up text-2xl mx-4 text-green-500 my-auto" />
              <p className="text-3xl text-green-500 mt-2 mb-2">
                {ddrCompliance}%
              </p>
            </div>
          )}
          <p className="text-center font-semibold text-lg">over past 30 days</p>
        </div>
        <div className="border-grey h-20 my-auto"></div>

        <div className="flex flex-col text-center mt-0 width-25 ">
          <p className="text-center font-semibold text-lg">
            Projected Yearly Bonus per Plan
          </p>
          <div>
            <p className="text-3xl mt-2 font-semibold mb-2">
              ${projectedYearlyBonus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsTrends;
