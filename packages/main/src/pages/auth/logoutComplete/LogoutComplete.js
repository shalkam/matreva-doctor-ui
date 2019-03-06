import React from 'react';
import { withApollo } from 'react-apollo';
import { compose, lifecycle } from 'recompose';
import { push } from 'react-router-redirect';
import { stateLink } from 'App/graphql/link';
import { persistor } from 'App/graphql/cache';

const LogoutComplete = () => <div>Logout page goes here ...</div>;

export default compose(
  withApollo,
  lifecycle({
    async componentDidMount() {
      const { client } = this.props;
      await client.clearStore();
      await client.resetStore();
      await persistor.purge();
      stateLink.writeDefaults();
      push('/');
    }
  })
)(LogoutComplete);
