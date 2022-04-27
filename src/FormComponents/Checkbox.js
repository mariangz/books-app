import { useField } from 'formik';

export default function Checkbox({ label, htmlFor, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label htmlFor={htmlFor} className='label checkbox'>
        {label}
      </label>
      <input type='checkbox' {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
