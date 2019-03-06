import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { compose, withHandlers, withState } from 'recompose';
import moment from 'moment-timezone';
import cx from 'classnames';
import { graphql } from 'react-apollo';

import PaymentSettingsIcon from 'images/paymentsettings.svg';
import logo from 'images/logo_orange.png';
import LogoutIcon from 'images/logout.svg';
import SettingsIcon from 'images/settings.svg';
import ProfileIcon from 'images/profile.svg';
import UserIcon from 'images/user.png';

import HeaderDropdown from './HeaderDropdown';

import styles from './Header.module.scss';
import getTokenGql from './gql/getToken.gql';

const HeaderUser = ({
  data: { loading, tokens },
  toggleMenu,
  collapsed,
  location: { pathname }
}) => {
  if (loading || !tokens.data) return null;
  const {
    data: { name, picture }
  } = tokens;
  const userTimeZone = moment.tz.guess();
  return (
    <div className={cx('flex-wrap', styles.container)}>
      <div
        className={cx(styles.logo, {
          'ml-5 ml-lg-0': pathname.includes('settings')
        })}
      >
        <img src={logo} alt="amplfi logo" />
      </div>

      <div style={{ flex: 1 }} />

      <div className={cx(styles.links, 'd-lg-flex')}>
        <div className={styles.greeting}>
          <p>Welcome, {name && name.split(' ')[0]}!</p>
          <p className="small">
            {moment()
              .tz(userTimeZone)
              .format('dddd, MMMM Do')}
          </p>
        </div>

        <HeaderDropdown
          image={picture || UserIcon}
          links={[
            {
              text: 'Account Settings',
              icon: SettingsIcon,
              route: '/dashboard/account'
            },
            {
              text: 'Clients',
              icon: ProfileIcon,
              route: '/dashboard/clients'
            },
            {
              text: 'Payment Settings',
              icon: PaymentSettingsIcon,
              route: '/payment'
            },
            {
              text: 'Logout',
              icon: LogoutIcon,
              route: '/auth/logout'
            }
          ]}
        />
      </div>
    </div>
  );
};

HeaderUser.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(
  graphql(getTokenGql),
  withRouter
)(HeaderUser);
