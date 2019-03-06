import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { lifecycle, withState, compose } from 'recompose';
import { setupClient } from './graphql/client';
import App from './App';

const AppContainer = ({ client }) =>
  client && (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

AppContainer.propTypes = {
  client: PropTypes.object
};

AppContainer.defaultProps = {
  client: null
};

const enhancers = compose(
  withState('client', 'setClient', null),
  lifecycle({
    componentDidMount() {
      setupClient().then(client => {
        this.props.setClient(client);
      });
    }
  })
);

export default enhancers(AppContainer);
