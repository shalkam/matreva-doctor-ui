import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter, NavLink } from 'react-router-dom';

import { compose, withHandlers } from 'recompose';
import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({
  buttons,
  getButtonGroupStyle,
  buttonStyle,
  location,
  style,
  theme,
  className
}) => (
  <div style={style} className={cx(className, styles[getButtonGroupStyle()])}>
    {buttons.map(button => (
      <NavLink
        activeClassName={styles.selected}
        exact={button.route === '/inbox'}
        className={styles.buttonItem}
        style={buttonStyle}
        key={button.route}
        to={button.route}
        data-text={button.label}
      >
        {button.label}

        {theme === 'secondary' && button.route === location.pathname && (
          <div styleName="overlay">{button.label}</div>
        )}
      </NavLink>
    ))}
  </div>
);

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  buttonStyle: PropTypes.object,
  location: PropTypes.object.isRequired,
  theme: PropTypes.string,
  style: PropTypes.object,
  getButtonGroupStyle: PropTypes.func.isRequired,
  className: PropTypes.string
};

ButtonGroup.defaultProps = {
  buttonStyle: null,
  style: null,
  theme: 'primary',
  className: null
};

const enhance = compose(
  withRouter,
  withHandlers({
    getButtonGroupStyle: ({ theme }) => () => {
      switch (theme) {
        case 'primary':
          return 'buttonGroup';
        case 'secondary':
          return 'buttonGroup-secondary';
        default:
          return 'buttonGroup';
      }
    }
  })
);

export default enhance(ButtonGroup);
