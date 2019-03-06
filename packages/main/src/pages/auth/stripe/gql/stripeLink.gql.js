import gql from 'graphql-tag';

export default gql`
  mutation link($code: String!) {
    stripeLink(code: $code)
  }
`;
