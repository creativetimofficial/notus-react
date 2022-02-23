import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import Navbar from '../components/Navbars/DashboardNavbar';
import FooterAdmin from '../components/Footers/FooterAdmin';

// views

import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

import backgroundImage from '../assets/img/register_bg_2.png'

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat z-0"
            style={{
              backgroundImage:
                `url(${backgroundImage})`,
            }}
          />
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
