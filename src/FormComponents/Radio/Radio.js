import { useField } from 'formik';
import './Radio.scss';

const RadioButton = ({
  ...fuseField,
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default function Radio({ legend, ...props }) {
 
  console.log(field);
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {radioList.map((item, index) => (
          <div key={item} className='radio__container'>
            <div className='radio__item'>
              <input
                
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
        {/* {meta.touched && meta.error && (
          <div className='error'>{meta.error}</div>
        )} */}
      </fieldset>
    </>
  );
}
