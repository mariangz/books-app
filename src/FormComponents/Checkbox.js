import { useField } from 'formik';

export default function Checkbox({ label, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label htmlFor={props.name} className='label checkbox'>
        {label}
      </label>
      <input id={props.name} type='checkbox' {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
