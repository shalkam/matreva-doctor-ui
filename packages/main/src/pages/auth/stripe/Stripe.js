import React from 'react';
import { graphql } from 'react-apollo';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import Modal from 'ui/Modal';
import stripeLinkGql from './gql/stripeLink.gql';

const Stripe = () => (
  <Modal forceOpen>
    <div>Getting Stripe info ...</div>
  </Modal>
);

const enhance = compose(
  withRouter,
  graphql(stripeLinkGql),
  lifecycle({
    async componentDidMount() {
      const {
        mutate,
        location: { search },
        history: { push }
      } = this.props;
      try {
        await mutate({
          variables: {
            code: qs.parse(search, { ignoreQueryPrefix: true }).code
          }
        });
        push('/payment');
      } catch (e) {
        console.log(e);
      }
    }
  })
);
export default enhance(Stripe);
