import React from "react";

// components

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Card Tables
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Project
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Budget
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Status
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Users
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Completion
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={require("assets/img/bootstrap.jpg")}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className="ml-3 text-gray-700 font-bold">
                        Argon Design System
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      $2,500 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <i class="fas fa-circle text-orange-500 mr-2"></i> pending
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex">
                        <img
                          src={require("assets/img/team-1-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full"
                        ></img>
                        <img
                          src={require("assets/img/team-2-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-3-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-4-470x470.png")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={require("assets/img/angular.jpg")}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className="ml-3 text-gray-700 font-bold">
                        Angular Now UI Kit PRO
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      $1,800 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <i class="fas fa-circle text-green-500 mr-2"></i>{" "}
                      completed
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex">
                        <img
                          src={require("assets/img/team-1-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full"
                        ></img>
                        <img
                          src={require("assets/img/team-2-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-3-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-4-470x470.png")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">100%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                            <div
                              style={{ width: "100%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={require("assets/img/sketch.jpg")}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className="ml-3 text-gray-700 font-bold">
                        Black Dashboard Sketch
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      $3,150 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <i class="fas fa-circle text-red-500 mr-2"></i> delayed
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex">
                        <img
                          src={require("assets/img/team-1-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full"
                        ></img>
                        <img
                          src={require("assets/img/team-2-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-3-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-4-470x470.png")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">73%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: "73%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={require("assets/img/react.jpg")}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className="ml-3 text-gray-700 font-bold">
                        React Material Dashboard
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      $4,400 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <i class="fas fa-circle text-teal-500 mr-2"></i> on
                      schedule
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex">
                        <img
                          src={require("assets/img/team-1-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full"
                        ></img>
                        <img
                          src={require("assets/img/team-2-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-3-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-4-470x470.png")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">90%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                            <div
                              style={{ width: "90%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={require("assets/img/vue.jpg")}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className="ml-3 text-gray-700 font-bold">
                        React Material Dashboard
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      $2,200 USD
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <i class="fas fa-circle text-green-500 mr-2"></i>{" "}
                      completed
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex">
                        <img
                          src={require("assets/img/team-1-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full"
                        ></img>
                        <img
                          src={require("assets/img/team-2-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-3-800x800.jpg")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                        <img
                          src={require("assets/img/team-4-470x470.png")}
                          alt="..."
                          className="w-10 h-10 rounded-full -ml-3"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">100%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                            <div
                              style={{ width: "100%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                            ></div>
                          </div>
                        </div>
                      </div>
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
