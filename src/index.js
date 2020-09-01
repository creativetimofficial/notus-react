import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "views/Dashboard.js";
import Login from "views/Login.js";
import Register from "views/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
