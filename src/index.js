import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/index.css";

// layouts

import Admin from "layouts/dashboard.js";
import Auth from "layouts/Auth.js";
import NotFound from "notFound.js";

// views without layouts


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route exact path="/" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
