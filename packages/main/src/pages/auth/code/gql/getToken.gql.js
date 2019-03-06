import gql from 'graphql-tag';

export default gql`
  query getToken($code: String!) {
    getToken(code: $code) {
      refresh_token
      id_token
      access_token
      expires_in
      scope
      token_type
    }
  }
`;
