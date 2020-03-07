import PropTypes from 'prop-types';
import React from 'react';

function Box({ children }) {
  return <div className="col-span-1 shadow p-8">{children}</div>;
}

Box.propTypes = {
  children: PropTypes.node,
};

export default Box;
