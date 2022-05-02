import { Field } from 'formik';
import './Radio.scss';
const userList = ['reader', 'writer', 'both'];

const RadioButton = ({
  field: { name, value, onChange, onBlur },
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
        type='radio'
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default function Radio(legend, ...props) {
  <fieldset>
    <legend>{legend}</legend>
    {userList.map((item) => {
      <RadioButton key={{ item }}>
        <input
          type='radio'
          id={item}
          name='user'
          value={item}
          checked={id === value}
        />
        <label htmlFor={item}>{item}</label>
      </RadioButton>;
    })}
    {touched && <div className='error'>{error}</div>}
  </fieldset>;
}
