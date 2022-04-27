import { useField } from 'formik';

export default function Datalist({ label, list, children, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor='country'>Country</label>
      <input list={list} {...field} {...props} />
      {children}
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
