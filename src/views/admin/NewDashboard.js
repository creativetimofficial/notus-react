import React from "react";
import { Link } from "react-router-dom";

// components
import CardBarChart from "../../components/Cards/CardBarChart.js";
import Circle from "../../components/Misc/Circle.js";


export default function NewDashboard({ measures }) {
  let comp = {displayName: "Composite Score", rating: ""}
  comp = measures && measures.length ? measures[0] : comp;
  const compName = "composite";  
  const measureNoComp = measures.filter(measure => measure.name !== compName);

  const labels = measures.length ? Object.keys(comp.impact): [];
  const data = measures.length ? Object.values(comp.impact): [];

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-3xl text-gray-800">
                HEDIS Score
              </h3>
            </div>
          </div>
        </div>
        <div> 
          <div className="flex flex-wrap">
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4 relative min-h-circle">
              <Circle number={comp.rating} />
            </div>
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardBarChart 
                labels={labels}
                data={data}
                title="Measures" 
                yAxis="% Impact on HEDIS Score" 
                xAxis="Measure" 
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <h3 className="font-semibold text-xl text-gray-800">Explanation</h3>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-md uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Measure
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-md uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {measureNoComp.map((measure) => (
                    <tr key={measure.name}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-no-wrap p-4 text-left ">
                      <Link to={{
                        pathname: `/admin/measure/${measure.name}`,
                        state: {
                          measure
                        }
                      }}> 
                          {measure.displayName}
                      </Link>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-no-wrap p-4">
                          {measure.rating}
                        </td>
                    </tr>
                  ))}
                  </tbody>
              </table>
            </div>
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <h3 className="font-semibold text-xl text-gray-800">Major Issues</h3>
              <table className="items-center w-full bg-transparent border-collapse">
                <tbody>
                  <tr>
                    <th className="border-t-0 align-left border-l-0 border-r-0 text-md whitespace-no-wrap text-left">
                      % Denominator Non-Compliant
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-no-wrap p-4">
                      33%
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 align-left border-l-0 border-r-0 text-md whitespace-no-wrap text-left">
                      % Numerator Non-Compliant
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-no-wrap p-4">
                      53%
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 align-left border-l-0 border-r-0 text-md whitespace-no-wrap text-left">
                      % Issues w/ [Encounter]
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-no-wrap p-4">
                      33%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
