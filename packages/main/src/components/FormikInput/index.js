import React from 'react';
import classNames from 'classnames';

import styles from './FormikInput.module.scss';

type InputProps = {
  id: string,
  error?: string,
  label?: string,
  inputStyle?: any,
  onChange?: Function,
  value: string,
  style?: any,
  labelStyle?: any,
  errorStyle?: any
};

const FormikInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  inputStyle,
  style,
  errorStyle,
  labelStyle,
  ...inputProps
}: InputProps): ReactElement => {
  const mainInputStyle = classNames(styles.input, {
    [styles.invalid]: error
  });

  return (
    <div className={styles.wrapper} style={style}>
      <label className={styles.label} style={labelStyle} htmlFor={id}>
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          className={mainInputStyle}
          style={inputStyle}
          cols="4"
          id={id}
          name={id}
          onChange={onChange}
          type={type}
          value={value}
          {...inputProps}
        />
      ) : (
        <input
          className={mainInputStyle}
          style={inputStyle}
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          {...inputProps}
        />
      )}

      {error && (
        <p className={styles.errorMessage} style={errorStyle}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormikInput;
