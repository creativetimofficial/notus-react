import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="not-found">
        <h1>404 Error</h1>
        <p className="not-found__explanation">
          The page you&apos;re seeking is not found. You may wish to return to the
          <Link to="/">&nbsp;main page.</Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
