import { useField } from 'formik';

export default function Datalist({ label, children, ...props }) {
  const [field, meta] = useField(props);
  console.log(props);
  return (
    <div>
      <label htmlFor='country'>Country</label>
      <input {...field} {...props} />
      {children}
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
