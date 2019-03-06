import gql from 'graphql-tag';

export default gql`
  query getTokens {
    tokens @client {
      data
    }
  }
`;
