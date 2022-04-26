import { useField } from 'formik';

export default function Select({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name} className='label select'>
        {label}
      </label>
      <select {...field} {...props}>
        <option value=''>Choose one</option>
        <option value='book'>Physical Book</option>
        <option value='kindle'>Kindle</option>
        <option value='kobo'>Kobo</option>
        <option value='nook'>Nook</option>
        <option value='other'>Other</option>
      </select>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
