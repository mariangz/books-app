// import { useField } from 'formik';

export default function Radio({ label, ...props }) {
  const userList = ['reader', 'writer', 'both'];
  // const [field, meta] = useField(props);
  return (
    <div>
      <fieldset>
        <legend>Are you...</legend>
        {userList.map((item, index) => (
          <div>
            <input type='radio' key={item} id={item} name='user' value={item} />
            <label htmlFor={item}>{item}</label>
            {index !== userList.length - 1 && <br />}
          </div>
        ))}
      </fieldset>
      {/* {meta.touched && meta.error && <div className='error'>{meta.error}</div>} */}
    </div>
  );
}
