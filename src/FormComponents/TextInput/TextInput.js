import { useField } from 'formik';
import './TextInput.scss';
import clsx from 'clsx';

export default function TextInput({ label, htmlFor, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className='field input-container'>
      <label htmlFor={htmlFor} className='label'>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={clsx({
          input: true,
          'input-error': meta.error,
          success: !meta.error,
          touched: meta.touched,
        })}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
