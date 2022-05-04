import { useField } from 'formik';
import './Checkbox.scss';

export default function Checkbox({ label, htmlFor, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <div className='checkbox-container input-container'>
        <input type='checkbox' {...field} {...props} />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
