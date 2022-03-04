import React, { useState } from "react";
import StarRating from "./StarRating";
import HelpIcon from "@mui/icons-material/Help";
import "./RatingTrends.css";
const RatingsTrends = ({ starRating, AIS, DDR, ProjectedBonus }) => {
  // const [aisCompliance, setAisCompliance] = useState("10");
  // const [ddrCompliance, setDdrCompliance] = useState("5");
  // const [projectedYearlyBonus, setprojectedYearlyBonus] = useState(40);
  const [displayRatingsTrends, setDisplayRatingsTrends] = useState(false);
  const handleToggle = () => {
    setDisplayRatingsTrends(!displayRatingsTrends);
  };
  return (
    <div className="HEDIS_Dashboard_RatingsTrends_Container  mt-8 mb-4">
      <div className="flex flex-col ">
        <div className="flex">
          <h1 className="text-left mx-4 text-4xl font-semibold ">
            Ratings & Trends
          </h1>
          <label class="btn-onoff flex justify-center ml-3">
            <input
              type="checkbox"
              name="name"
              onClick={() => handleToggle()}
              data-onoff="toggle"
            />
            <span></span>
          </label>
        </div>
        <p className="text-left mx-4 text-lg ">
          Descriptive text about this section and impacts and events that
          contribute to star rating ...
        </p>
      </div>
      {displayRatingsTrends ? (
        <div className="flex flex-col mt-6">
          <div className="flex">
            <div className="flex flex-col text-center mt-0 width-25 ">
              <div className="flex justify-center">
                <p className="text-center font-semibold text-lg">Star Rating</p>
                <p className="Help">
                  <HelpIcon className="ml-1" />
                </p>
              </div>
              <div className="mt-2 ">
                <StarRating className="" rating={starRating} />
              </div>
            </div>
            <div className="border-grey h-20 my-auto"></div>
            <div className="flex flex-col justify-center width-25">
              <p className="text-center font-semibold text-lg mt-0">
                AIS, % Compliance
              </p>
              {AIS.includes("-") ? (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-down text-2xl mx-4 text-red-500 my-auto" />
                  <p className="text-3xl text-red-500 mt-2 mb-2">{AIS}%</p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-up text-2xl mx-4 text-green-500 my-auto" />
                  <p className="text-3xl text-green-500 mt-2 mb-2">{AIS}%</p>
                </div>
              )}

              <p className="text-center font-semibold text-lg">
                over past 30 days
              </p>
            </div>
            <div className="border-grey h-20 my-auto"></div>
            <div className="flex flex-col justify-center width-25">
              <p className="text-center font-semibold text-lg mt-0">
                DDR, % Compliance
              </p>
              {DDR.includes("-") ? (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-down text-2xl mx-4 text-red-500 my-auto" />
                  <p className="text-3xl text-red-500 mt-2 mb-2">{DDR}%</p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-up text-2xl mx-4 text-green-500 my-auto" />
                  <p className="text-3xl text-green-500 mt-2 mb-2">{DDR}%</p>
                </div>
              )}
              <p className="text-center font-semibold text-lg">
                over past 30 days
              </p>
            </div>
            <div className="border-grey h-20 my-auto"></div>
            <div className="flex flex-col text-center mt-0 width-25 ">
              <p className="text-center font-semibold text-lg">
                Projected Yearly Bonus per Plan
              </p>
              <div>
                <p className="text-3xl mt-2 font-semibold mb-2">
                  ${ProjectedBonus}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-end mt-6 width-75">
            <button
              type="button"
              className="btn border-grey p-4 rounded viewRatingDetailsBtn"
            >
              View Rating Details
            </button>
          </div> */}
        </div>
      ) : null}
    </div>
  );
};

export default RatingsTrends;
