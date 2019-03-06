import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import getTokenGql from './gql/getToken.gql';
import styles from './AuthCode.module.scss';

const AuthCode = ({ data: { loading, error } }) => (
  <div className={styles.auth}>
    {loading && <div>Authenticating ...</div>}
    {error && <div>{error.message}</div>}
  </div>
);
AuthCode.propTypes = {
  data: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  graphql(getTokenGql, {
    options: ({ location: { search } }) => ({
      variables: {
        code: qs.parse(search.substr(1)).code
      }
    })
  })
)(AuthCode);
