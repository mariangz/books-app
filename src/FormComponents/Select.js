import { useField } from 'formik';

export default function Select({ label, htmlFor, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={htmlFor} className='label select'>
        {label}
      </label>
      <select {...field} {...props}>
        {children}
      </select>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
