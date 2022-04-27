import { useField } from 'formik';

export default function Date({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name} className='label date'>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
