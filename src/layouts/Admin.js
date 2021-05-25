import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Measure from "components/Measures/Measure.js";

// views
import MeasureDashboard from "views/admin/MeasureDashboard.js";
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HEDIS_MEASURE_API_URL}measures`)
      .then(response => response.json())
      .then(res => {
        const specialName = "Composite";
        const first = res.find(a => a.name === specialName);
        const theRestSorted = res.filter(a => a.name !== specialName).sort((a, b) => a.name.localeCompare(b.name));
        setMeasures([first, ...theRestSorted])
    })
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      {/* <div className="relative md:ml-64 bg-gray-200"> */}
        <AdminNavbar />
        {/* Header */}
        <div className="bg-blue-600 pb-32 pt-12">
        </div> 
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route
              path='/dashboard'
              render={(props) => (
                <Dashboard {...props} measures={measures} />
              )}
            />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/maps" exact component={Maps} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/tables" exact component={Tables} />
            {/*<Redirect from="/admin" to="/admin/dashboard" />*/}
            {/*<Redirect from="/" to="/admin/dashboard" />*/}
            {/* temp fix - figure out later*/}
            <Route
              path="/measures/:measureName" 
              render={(props) => (
                <Measure {...props} measures={measures} />
              )}/>
            <Route
              path="/"
              render={(props) => (
                <MeasureDashboard {...props} measures={measures} />
              )}
              />
          </Switch>
          <FooterAdmin />
        </div>
      {/* </div> */}
    </>
  );
}
