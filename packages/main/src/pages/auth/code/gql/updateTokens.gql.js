import gql from 'graphql-tag';

export default gql`
  mutation updateTokens($tokens: Token) {
    updateTokens(tokens: $tokens) @client {
      id_token
      token
      refresh_token
    }
  }
`;
