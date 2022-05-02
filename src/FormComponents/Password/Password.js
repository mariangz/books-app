// import React from 'react';
import { useField } from 'formik';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../TextInput/TextInput.scss';
import './Password.scss';
import clsx from 'clsx';

export default function Password({ label, htmlFor, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(props);
  const type = showPassword ? 'text' : 'password';
  const icon = showPassword ? (
    <FontAwesomeIcon icon={solid('eye-slash')} />
  ) : (
    <FontAwesomeIcon icon={solid('eye')} />
  );

  return (
    <div className='field password'>
      <label htmlFor={htmlFor} className='label'>
        {label}
      </label>
      <input
        {...field}
        {...props}
        type={type}
        className={clsx({
          input: true,
          'input-error': meta.error,
          success: !meta.error,
          touched: meta.touched,
        })}
      />

      <span
        className='eye-toggle'
        onClick={() => setShowPassword((prevValue) => !prevValue)}
      >
        {icon}
      </span>
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </div>
  );
}
