import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/DashboardNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterAdmin absolute />
        </section>
      </main>
    </>
  );
}
