import { ApolloClient } from 'apollo-client';
import link from './link';
import { cache, persistor } from './cache';
import './sagas';

const client = new ApolloClient({
  link,
  cache
});

export const setupClient = async () => {
  if (window.location.pathname !== '/auth/logout/complete')
    await persistor.restore();
  return client;
};

export default client;
