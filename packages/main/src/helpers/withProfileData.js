import { withApollo, graphql } from 'react-apollo';
import { compose, withProps } from 'recompose';
import profileGql from 'gql/queries/profile.gql';
import getTokenGql from 'Layout/Header/gql/getToken.gql';

export default status =>
  status === 'first'
    ? compose(
        withApollo,
        graphql(getTokenGql),
        graphql(profileGql, { name: 'pData' }),
        withProps(
          ({
            client: { cache },
            data: { loading, tokens },
            pData: { profile, fetchMore }
          }) => {
            if (loading || !tokens.data || !profile) return { profileData: {} };
            fetchMore({
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.profile) return prev;
                return fetchMoreResult;
              }
            });
            const profileData = cache.readQuery({
              query: profileGql
            });
            return {
              profileData: profileData.profile
            };
          }
        )
      )
    : compose(
        withApollo,
        graphql(getTokenGql),
        withProps(({ client: { cache } }) => {
          const profileData = cache.readQuery({
            query: profileGql
          });
          return {
            profileData: profileData.profile
          };
        })
      );
