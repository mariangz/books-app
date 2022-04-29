import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './TextInput.scss';

export default function TextInput({ label, htmlFor, ...props }) {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <div className='field'>
      <label htmlFor={htmlFor} className='label'>
        {label}
      </label>
      <input {...field} {...props} className='input' />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
