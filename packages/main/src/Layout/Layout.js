import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import { ToastContainer } from '@churro/ui';
import { MdMenu, MdClose } from 'react-icons/md';
import cx from 'classnames';
import Button from './Button';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';

const Layout = ({ children, showSidebar, hideSidebar, sidebarActive }) => (
  <div className={styles.layout}>
    <ToastContainer />
    <Header />
    <div className={styles.content}>
      <Sidebar active={sidebarActive} hide={hideSidebar} />
      <div className={cx(styles.main, `ml-5 ml-lg-0 ml-sm-0 pt-4`)}>
        <Button
          type="ghost"
          className={cx(styles['sidebar-toggler'], `d-block d-lg-none`)}
          onClick={sidebarActive ? hideSidebar : showSidebar}
        >
          {!sidebarActive && (
            <MdMenu className="animated slideInLeft " size={32} />
          )}
          {sidebarActive && (
            <MdClose className="animated slideInLeft " size={32} />
          )}
        </Button>
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  sidebarActive: PropTypes.bool.isRequired
};

const enhancers = compose(
  withState('sidebarActive', 'setStateSidebarActive', false),
  withHandlers({
    showSidebar: ({ setStateSidebarActive }) => () => {
      setStateSidebarActive(true);
    },
    hideSidebar: ({ setStateSidebarActive }) => () => {
      setStateSidebarActive(false);
    }
  })
);
export default enhancers(Layout);
