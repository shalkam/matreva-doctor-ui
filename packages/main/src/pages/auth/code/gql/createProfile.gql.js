import gql from 'graphql-tag';

export default gql`
  mutation createProfile($name: String!, $email: String!) {
    createProfile(data: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;
