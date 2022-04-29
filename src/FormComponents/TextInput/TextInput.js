import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './TextInput.scss';
import clsx from 'clsx';

export default function TextInput({ label, htmlFor, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className='field'>
      <label htmlFor={htmlFor} className='label'>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={clsx({
          input: true,
          'input-error': meta.error,
          success: !meta.error,
          touched: meta.touched,
        })}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
