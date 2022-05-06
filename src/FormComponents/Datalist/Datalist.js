import { useField } from 'formik';
import clsx from 'clsx';

export default function Datalist({ label, htmlFor, children, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='field input-container'>
      <label htmlFor={htmlFor} className='label datalist'>
        Country
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
      {children}
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
