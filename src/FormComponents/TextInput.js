import { useField } from 'formik';

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
