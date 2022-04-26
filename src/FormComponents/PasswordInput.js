import { useField } from 'formik';

export default function PasswordInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        className='input text password'
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
