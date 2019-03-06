import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ error, timedOut, pastDelay }) => {
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }
  if (timedOut) {
    return <div>Taking a long time...</div>;
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};
Loading.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool
};
Loading.defaultProps = {
  error: null,
  timedOut: false,
  pastDelay: false
};

export default Loading;
