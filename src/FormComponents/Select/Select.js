import { useField } from 'formik';
import clsx from 'clsx';
import './Select.scss';
export default function Select({ label, htmlFor, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className='field'>
      <label htmlFor={htmlFor} className='label select'>
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={clsx({
          input: true,
          'input-error': meta.error,
          success: !meta.error,
          touched: meta.touched,
        })}
      >
        {children}
      </select>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
