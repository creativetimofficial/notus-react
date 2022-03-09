import React from 'react';
import PropTypes from 'prop-types';

function Banner({ updateDate, updateTime }) {
  return (
    <div className="HEDIS_Dashboard_Container">
      <h1 className="text-left mx-4 text-5xl font-semibold mt-16 ">
        HEDIS Dashboard
      </h1>
      <p className="text-left mx-4 text-xl font-semibold mb-1">
        {`Last Updated: ${updateDate}, ${updateTime}`}
      </p>
      <p className="text-left mx-4 text-xl">
        Descriptive text about this section - gratuitous octopus niacin, sodium
        glutimate.
      </p>
    </div>
  );
}

Banner.propTypes = {
  updateDate: PropTypes.string,
  updateTime: PropTypes.string,
}

Banner.defaultProps = {
  updateDate: '',
  updateTime: '',
}
export default Banner;
