import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import StarRating from './StarRating';
import './RatingTrends.css';

function RatingsTrends({
  starRating, AIS, DDR, ProjectedBonus,
}) {
  const [displayRatingsTrends, setDisplayRatingsTrends] = useState(false);
  const [displayStarRatingHelp, setDisplayStarRatingHelp] = useState(false);
  const handleToggle = (e) => {
    setDisplayRatingsTrends(!displayRatingsTrends);
  };
  const handleHover = (e) => {
    setDisplayStarRatingHelp(!displayStarRatingHelp);
  };
  return (
    <div className="HEDIS_Dashboard_RatingsTrends_Container mt-2 mb-2">
      <div className="flex flex-col ">
        <div className="flex mt-2">
          <h1 className="text-left mx-4 my-2 text-4xl font-semibold ">
            Ratings & Trends
          </h1>
          <label className="btn-onoff flex justify-center ml-3">
            <input
              type="checkbox"
              // name="name"
              onClick={(e) => handleToggle(e)}
              data-onoff="toggle"
            />
            <span />
          </label>
        </div>
        <p className="text-left mx-4 my-0 mb-2 text-xl ">
          Descriptive text about this section and impacts and events that
          contribute to star rating ...
        </p>
      </div>
      {displayRatingsTrends ? (
        <div className="flex flex-col mt-6">
          <div className="flex">
            <div className="flex flex-col text-center mt-0 width-25 StarRate">
              <div className="flex justify-center">
                <p className="text-center font-semibold text-2xl">
                  Star Rating
                </p>
                <p className="Help" onClick={(e) => handleHover(e)}>
                  <HelpIcon className="ml-1" />
                </p>
              </div>
              {displayStarRatingHelp ? (
                <div className="box sb1">
                  Star rating subject to change depending on measures and other
                  recources for more on star ratings and how their calculated
                  please contact NCQA
                </div>
              ) : (
                <div className="mt-2 ">
                  <StarRating rating={starRating} />
                </div>
              )}
            </div>
            <div className="border-grey h-auto my-auto" />
            <div className="flex flex-col width-25 AISRating">
              <p className="text-center font-semibold text-2xl mt-0">
                AIS, % Compliance
              </p>
              {AIS.includes('-') ? (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-down text-3xl mx-4 my-4 text-red-500 my-auto" />
                  <p className="text-4xl text-red-500 mt-1 mb-2">
                    {AIS}
                    %
                  </p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-up text-3xl mx-4 my-4 text-green-500 my-auto" />
                  <p className="text-4xl text-green-500 mt-1 mb-2">
                    {AIS}
                    %
                  </p>
                </div>
              )}

              <p className="text-center font-semibold text-lg">
                over past 30 days
              </p>
            </div>
            <div className="border-grey h-auto my-auto" />
            <div className="flex flex-col width-25 DDRRating">
              <p className="text-center font-semibold text-2xl mt-0">
                DDR, % Compliance
              </p>
              {DDR.includes('-') ? (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-down text-3xl mx-4 my-4 text-red-500 my-auto" />
                  <p className="text-4xl text-red-500 mt-1 mb-2">
                    {DDR}
                    %
                  </p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <i className="fa fa-arrow-up text-3xl mx-4 my-4 text-green-500 my-auto" />
                  <p className="text-4xl text-green-500 mt-1 mb-2">
                    {DDR}
                    %
                  </p>
                </div>
              )}
              <p className="text-center font-semibold text-lg">
                over past 30 days
              </p>
            </div>
            <div className="border-grey h-auto my-auto ProjectedBonus" />
            <div className="flex flex-col text-center mt-0 width-25 ">
              <p className="text-center font-semibold text-2xl mt-0">
                Projected Yearly Bonus per Plan
              </p>
              <div>
                <p className="text-3xl mt-2 font-semibold mb-2">
                  $
                  {ProjectedBonus}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6 width-75">
            <button
              type="button"
              className="btn border-grey p-4 rounded viewRatingDetailsBtn"
            >
              View Rating Details
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RatingsTrends;
