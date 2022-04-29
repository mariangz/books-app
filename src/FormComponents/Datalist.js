import { useField } from 'formik';

export default function Datalist({ label, htmlFor, children, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='field'>
      <label htmlFor={htmlFor} className='label datalist'>
        Country
      </label>
      <input {...field} {...props} className='input' />
      {children}
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
