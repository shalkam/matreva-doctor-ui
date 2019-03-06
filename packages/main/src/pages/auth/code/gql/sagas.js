import { push } from 'react-router-redirect';
import jwtDecode from 'jwt-decode';
import client from 'App/graphql';
import profileGql from 'gql/queries/profile.gql';
import updateTokensGql from './updateTokens.gql';
import createProfileGql from './createProfile.gql';

const sagas = [
  {
    saga: 'QUERY.GETTOKEN.PENDING',
    handler: () => {
      console.log('GETTOKEN mutation has started');
    }
  },
  {
    saga: 'QUERY.GETTOKEN.FAIL',
    handler: errors => {
      console.log(errors);
    }
  },
  {
    saga: 'QUERY.GETTOKEN.SUCCESS',
    handler: async ({ getToken }) => {
      try {
        const data = jwtDecode(getToken.id_token);
        await client.mutate({
          mutation: updateTokensGql,
          variables: {
            tokens: { ...getToken, data }
          }
        });
        const {
          data: { profile }
        } = await client.query({ query: profileGql });
        if (profile) {
          push('/');
        } else {
          await client.mutate({
            mutation: createProfileGql,
            variables: {
              name: data.name,
              email: data.email
            },
            update: (proxy, { data: { createProfile } }) => {
              proxy.writeQuery({
                query: profileGql,
                data: { profile: createProfile }
              });
            }
          });
          push('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
];

export default sagas;
