import gql from 'graphql-tag';

const tokensQuery = gql`
  query getTokens {
    tokens @client {
      id_token
      access_token
      refresh_token
      data
    }
  }
`;

const updateTokens = (_obj, { tokens }, { cache }) => {
  cache.writeQuery({
    query: tokensQuery,
    data: { tokens }
  });
  return null;
};

const config = {
  defaults: {
    tokens: {
      id_token: null,
      access_token: null,
      refresh_token: null,
      data: null,
      __typename: 'Token'
    }
  },
  resolvers: {
    Mutation: {
      updateTokens
    }
  }
};

export default config;
