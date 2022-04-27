import { useField } from 'formik';

export default function EmailInput({ label, htmlFor, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input className='input text' {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
