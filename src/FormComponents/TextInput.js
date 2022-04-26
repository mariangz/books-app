import { useField } from 'formik';

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} className='input text' {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
