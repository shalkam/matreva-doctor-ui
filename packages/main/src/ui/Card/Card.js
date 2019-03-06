import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MdMoreHoriz } from 'react-icons/md';
import styles from './Card.module.scss';

const Card = ({ children, title, className }) => (
  <div className={cx(styles.card, className)}>
    {title && (
      <div className={styles.header}>
        <h2>{title}</h2>
        <MdMoreHoriz className={styles.action} />
      </div>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};

Card.defaultProps = {
  className: null,
  title: null
};

export default Card;
