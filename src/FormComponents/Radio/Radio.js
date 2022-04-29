import { useField } from 'formik';
import './Radio.scss';

const radioList = ['reader', 'writer', 'both'];

export default function Radio({ legend, ...props }) {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {radioList.map((item, index) => (
          <div key={item} className='radio__container'>
            <div className='radio__item'>
              <input
                {...field}
                type='radio'
                name='user'
                id={item}
                value={item}
                checked={field.value.user === item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          </div>
        ))}
      </fieldset>
      {/* {meta.touched && meta.error && <div className='error'>{meta.error}</div>} */}
    </>
  );
}
