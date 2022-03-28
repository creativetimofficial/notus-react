import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Snackbar, IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// layouts

import axios from 'axios';
import Dashboard from './layouts/Dashboard';
import Auth from './layouts/Auth';
import NotFound from './notFound';
import DatastoreProvider from './context/DatastoreProvider';

export default function AuthExample() {
  if (`${process.env.REACT_APP_AUTH}` === 'false') {
    localStorage.removeItem('seenWelcome', 'yes');
  }

  const initialShowWelcome = !localStorage.getItem('seenWelcome') || !localStorage.getItem('token');
  const [showWelcome, setShowWelcome] = React.useState(initialShowWelcome);

  if (`${process.env.REACT_APP_AUTH}` === 'false') {
    return returnValue(true, showWelcome, setShowWelcome);
  }

  let accessToken = localStorage.getItem('token');

  if (accessToken) {
    const loggedIn = validateAccessToken(accessToken);
    if (!loggedIn) {
      localStorage.removeItem('seenWelcome');
    }
    return returnValue(loggedIn, showWelcome, setShowWelcome);
  }

  const { hash } = window.location;
  const urlParams = new URLSearchParams(hash);
  accessToken = urlParams.get('access_token');

  if (accessToken) {
    localStorage.setItem('seenWelcome', 'yes');
    localStorage.setItem('token', accessToken);
    window.history.replaceState({}, document.title, '/');
    return returnValue(true, showWelcome, setShowWelcome);
  }

  return returnValue(false, showWelcome, setShowWelcome);
}

const action = (setShowWelcome) => (
  <IconButton
    className="dashboard__snackbar-close"
    size="small"
    aria-label="close"
    color="inherit"
    disableFocusRipple
    disableRipple
    onClick={() => setShowWelcome(false)}
  >
    <CloseIcon fontSize="small" />
  </IconButton>
);

const returnValue = (loggedIn, showWelcome, setShowWelcome) => (
  <>
    <Snackbar
      open={showWelcome}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => setShowWelcome(false)}
      message="Welcome to Saraswati, where knowledge is power."
      action={action(setShowWelcome)}
      sx={{
        '& .MuiSnackbarContent-root': { backgroundColor: '#DFF4FC', color: '#263238' },
      }}
    />
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          {loggedIn
            ? (
              <DatastoreProvider>
                <Dashboard />
              </DatastoreProvider>
            )
            : <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  </>

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
