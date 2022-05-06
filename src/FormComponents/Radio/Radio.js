import { useField } from 'formik';
import './Radio.scss';

export default function Radio({ ...props }) {
  const [field, meta] = useField(props);

  const userList = ['reader', 'writer', 'both'];
  return (
    <div>
      <fieldset className='fieldset input-container'>
        <legend>You are a:</legend>
        {userList.map((item) => {
          return (
            <div key={item} className='radio-input-container'>
              <input
                {...props}
                {...field}
                type='radio'
                id={item}
                name='user'
                value={item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </fieldset>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
}
