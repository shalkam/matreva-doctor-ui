import { compose, lifecycle } from 'recompose';
import { graphql } from 'react-apollo';
import getTokenGql from 'gql/client/getToken.gql';

const Logout = () => null;

Logout.propTypes = {};

export default compose(
  graphql(getTokenGql),
  lifecycle({
    componentDidMount() {
      const {
        data: {
          tokens: { id_token: idToken }
        }
      } = this.props;
      window.location = `https://accounts.churro.io/auth/session/end?id_token_hint=${idToken}&post_logout_redirect_uri=${
        process.env.REACT_APP_PUBLIC_URL
      }/auth/logout/complete`;
    }
  })
)(Logout);
