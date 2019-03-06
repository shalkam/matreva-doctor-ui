import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FaSpinner } from 'react-icons/fa';
import styles from './Button.module.scss';

const Button = ({ loading, type, children, htmlType, className, ...props }) => (
  <button
    disabled={loading}
    type={htmlType}
    className={cx(className, styles[type])}
    {...props}
  >
    {children}
    {loading && <FaSpinner className={cx(styles.spinner, 'rotate')} />}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  htmlType: PropTypes.oneOf(['button', 'submit']),
  type: PropTypes.oneOf(['ghost', 'primary', 'outline'])
};

Button.defaultProps = {
  loading: false,
  type: 'primary',
  htmlType: 'button',
  className: ''
};

export default Button;
