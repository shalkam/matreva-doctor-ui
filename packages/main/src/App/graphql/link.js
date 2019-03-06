// import { HttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { setContext } from 'apollo-link-context';
import { ApolloLink, split } from 'apollo-link';
import { sagaLink } from 'apollo-link-saga';
import getTokenGql from 'gql/client/getToken.gql';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import profileGql from 'gql/queries/profile.gql';
import stateConfig from './state';
import { cache } from './cache';

// Create an http link:
const httpLink = createUploadLink({ uri: process.env.REACT_APP_API_URL });

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_API_WS_URL,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const linkHttp = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const stateLink = withClientState({
  cache,
  ...stateConfig
});

const authLink = setContext((_, { headers }) => {
  const { tokens } = cache.readQuery({
    query: getTokenGql
  });
  let profileData;
  try {
    profileData = cache.readQuery({
      query: profileGql
    });
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
  return {
    headers: {
      ...headers,
      authorization: tokens.access_token ? `Bearer ${tokens.access_token}` : '',
      userid: tokens.data ? tokens.data.sub : undefined,
      userdata:
        profileData && profileData.profile
          ? JSON.stringify({
              profileID: profileData.profile.id,
              name: profileData.profile.companyName,
              picture: profileData.profile.picture
            })
          : '{ "profileID": null }'
    }
  };
});

const link = ApolloLink.from([
  stateLink,
  authLink,
  sagaLink,
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  linkHttp
]);

export default link;
