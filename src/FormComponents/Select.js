import { useField } from 'formik';

export default function Select({ label, htmlFor, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className='field'>
      <label htmlFor={htmlFor} className='label select'>
        {label}
      </label>
      <select {...field} {...props} className='input'>
        {children}
      </select>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
