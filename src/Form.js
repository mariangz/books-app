import { useState } from 'react';
import RadioButton from './RadioButton';
import Datalist from './Datalist';

export default function Form() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    user: 'reader',
    country: '',
    device: '',
    birthday: '',
  });

  const listName = Object.keys(data).map(
    (item, index) =>
      index < 5 && (
        <div className={item} key={item}>
          <label htmlFor={item}>{item}</label>
          <input
            id={item}
            type={
              item === 'password' || item === 'confirmPassword'
                ? 'password'
                : 'text'
            }
            name={item}
            value={data[item]}
            onChange={handleInputChange}
          />
        </div>
      )
  );
  console.log(data);
  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  const userList = ['reader', 'writer', 'both'];
  return (
    <form>
      {listName}
      <div>
        <fieldset>
          <legend>Are you...</legend>
          {userList.map((item, index) => (
            <>
              <RadioButton
                key={item}
                id={item}
                value={item}
                checked={item}
                label={item}
              />
              {index !== userList.length - 1 && <br />}
            </>
          ))}
        </fieldset>
      </div>
      <div>
        <Datalist onInputChange={handleInputChange} />
      </div>
      <div>
        <label>Favorite device</label>
        <select
          id='device'
          name='device'
          value={data.device}
          onChange={handleInputChange}
        >
          <option value='book'>Physical Book</option>
          <option value='kindle'>Kindle</option>
          <option value='kobo'>Kobo</option>
          <option value='nook'>Nook</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor='birthday'></label>
        <input
          type='date'
          id='birthday'
          name='birthday'
          value={data.birthday}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <input
          type='checkbox'
          id='terms'
          name='terms'
          checked={data['terms']}
          onChange={handleInputChange}
        />
        <label htmlFor='checkbox'>
          I have read and agree to the Terms and Conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}
