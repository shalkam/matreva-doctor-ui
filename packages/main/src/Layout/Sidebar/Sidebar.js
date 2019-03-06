import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  compose,
  lifecycle,
  withHandlers,
  branch,
  renderNothing
} from 'recompose';
import cx from 'classnames';
import styles from './Sidebar.module.scss';

const Sidebar = ({ onRef, active, changeRoute }) => (
  <div className={cx(styles.sidebar, { [styles.active]: active })} ref={onRef}>
    <ul>
      <li>
        <a href="/dashboard/overview" onClick={changeRoute}>
          Overview
        </a>
      </li>
      <li>
        <a href="/dashboard/clients" onClick={changeRoute}>
          Clients
        </a>
      </li>
      <li>
        <a href="/dashboard/client-signup" onClick={changeRoute}>
          Create account
        </a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/dashoard/clients">Support</a>
      </li>
      <li>
        <a href="/auth/logout" onClick={changeRoute}>
          Logout
        </a>
      </li>
    </ul>
  </div>
);

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  onRef: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired
};

const enhancers = compose(
  withRouter,
  branch(
    ({ location: { pathname } }) => pathname.includes('/auth'),
    renderNothing
  ),
  withHandlers(() => {
    let sidebar = null;
    return {
      onRef: () => ref => {
        sidebar = ref;
      },
      hideSidebar: ({ hide }) => e => {
        if (sidebar.contains(e.target)) {
          return;
        }
        hide();
      },
      changeRoute: ({ hide, history }) => e => {
        e.preventDefault();
        history.push(e.target.getAttribute('href'));
        hide();
      }
    };
  }),
  lifecycle({
    componentWillMount() {
      if (typeof window === 'object') {
        document.addEventListener('mousedown', this.props.hideSidebar, false);
      }
    },
    componentWillUnmount() {
      if (typeof window === 'object') {
        document.removeEventListener(
          'mousedown',
          this.props.hideSidebar,
          false
        );
      }
    }
  })
);
export default enhancers(Sidebar);
