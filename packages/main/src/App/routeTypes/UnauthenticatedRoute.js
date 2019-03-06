import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { graphql } from 'react-apollo';
import getTokenGql from 'gql/client/getToken.gql';

const UnauthenticatedRoute = ({
  location,
  data: { loading, tokens },
  ...props
}) => {
  if (loading) return null;
  if (tokens && tokens.access_token) return <Redirect to="/" />;
  return <Route {...props} />;
};

UnauthenticatedRoute.propTypes = {
  data: PropTypes.object.isRequired
};
export default graphql(getTokenGql)(UnauthenticatedRoute);
