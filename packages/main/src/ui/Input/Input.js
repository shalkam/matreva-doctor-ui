// @flow

import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

export default ({
  errorMessage,
  id,
  inputStyle,
  name,
  isValid,
  label,
  labelStyle,
  onChange,
  placeholder,
  style,
  type,
  value,
  ...rest
}) => {
  const mainInputStyle = cx(styles.input, {
    [styles.invalidInput]: !isValid
  });

  return (
    <div style={style}>
      <label className={styles.label} style={labelStyle} htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={mainInputStyle}
          style={inputStyle}
          name={name}
          cols="4"
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          {...rest}
        />
      ) : (
        <input
          className={mainInputStyle}
          style={inputStyle}
          id={id}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
      <div className={styles.errorMessage}>
        {!isValid && errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};
