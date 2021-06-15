import React from "react";
import { useParams } from "react-router-dom";

// components
import CardBarChart from "../Cards/CardBarChart.js";
import Circle from "../Misc/Circle.js";
import StarRatings from "react-star-ratings";

export default function Measure({ measures }) {
  let { measureName } = useParams();
  const measure = measures.filter((measure) => measure.name === measureName)[0];

  const labels = measures.length
    ? Object.keys(measure.expressions).map((attribute, i) => `E${i}`)
    : [];
  const expressionData = measures.length
    ? Object.values(measure.expressions)
    : [];
  const improvementData = measures.length
    ? Object.values(measure.improvements)
    : [];
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-3xl text-gray-800">
                {measure ? measure.displayName : undefined}
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap">
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4 relative min-h-circle">
              {/* <Circle number={comp.rating} /> */}
              <div className="inline-block text-center stars">
                <StarRatings
                  rating={measure ? measure.rating : 0}
                  starRatedColor="#ffd700"
                  numberOfStars={5}
                  starDimension="70px"
                  starSpacing="2px"
                  name="rating"
                />
              </div>
            </div>
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardBarChart
                title="Expressions"
                labels={labels}
                data={expressionData}
                yAxis="No. of Instances"
                xAxis="Expression"
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <h3 className="font-semibold text-xl text-gray-800">
                Explanation
              </h3>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Label
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Expression
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {measure
                    ? Object.keys(measure.expressions).map((attribute, i) => (
                        <tr key={measure.name + `-${i}`}>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                            {/* <td className="text-sm text-gray-800"></td> */}E
                            {i}
                            {/* <td className="text-sm text-gray-800"></td> */}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            {attribute}
                          </td>
                        </tr>
                      ))
                    : undefined}
                </tbody>
              </table>
            </div>
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <CardBarChart
                title="Easy Fixes"
                labels={labels}
                data={improvementData}
                yAxis="Esimated HEDIS Growth"
                xAxis="Expression"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
