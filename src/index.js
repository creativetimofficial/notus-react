import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import NotFound from "notFound.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route exact path="/" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" component={Landing} />
      <Route path="/profile" component={Profile} />
      {/* <Route path="/" exact component={Admin} /> */}
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/measures" /> */}
      {/* <Redirect from="/" to="/admin" /> */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
