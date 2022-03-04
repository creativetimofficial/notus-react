import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// layouts

import axios from 'axios';
import Admin from './layouts/dashboard';
import Auth from './layouts/Auth';
import NotFound from './notFound';

export default function AuthExample() {
  if (`${process.env.REACT_APP_AUTH}` === 'false') {
    return returnValue(true);
  }

  let accessToken = localStorage.getItem('token');

  if (accessToken) {
    const loggedIn = validateAccessToken(accessToken);
    return returnValue(loggedIn);
  }

  const { hash } = window.location;
  const urlParams = new URLSearchParams(hash);
  accessToken = urlParams.get('access_token');

  if (accessToken) {
    localStorage.setItem('token', accessToken);
    window.history.replaceState({}, document.title, '/');
    return returnValue(true);
  }

  return returnValue(false);
}

const returnValue = (loggedIn) => (
  <BrowserRouter>
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route exact path="/">
        {loggedIn ? <Admin /> : <Redirect to="/auth" />}
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

const validateAccessToken = async (accessToken) => {
  try {
    await axios.get(`${process.env.REACT_APP_TOKENINFO}?access_token=${accessToken}`);
  } catch (error) {
    localStorage.removeItem('token');
    window.location.replace(`${process.env.REACT_APP_DASHBOARD_URL}/auth`);
  }
  return true;
}
