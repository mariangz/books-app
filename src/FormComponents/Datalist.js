import { useField } from 'formik';
import { countryList } from '../FormComponents/countryList';

export default function Datalist({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor='country'>Country</label>
      <input list='countries' {...field} {...props} />
      <datalist id='countries'>
        {countryList.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
