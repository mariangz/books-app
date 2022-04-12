import { useState } from 'react';

export default function Form() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
    user: '',
  });
  return (
    <form>
      <div className='name'>
        <label for='name'>First Name:</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Enter your name'
          value=''
        />
      </div>
      <div className='surname'>
        <label for='surname'>Surname:</label>
        <input
          id='surname'
          type='text'
          name='surname'
          placeholder='Enter your surname'
          value=''
        />
      </div>
      <div className='email'>
        <label for='email'>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your name'
          value=''
        />
      </div>
      <div className='password'>
        <label for='password'>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value=''
        />
      </div>
      <div className='confirmPassword'>
        <label for='confirmPassword'>Confirm Password:</label>
        <input
          type='password'
          name='confirmPassword'
          placeholder='Enter your password'
          value=''
        />
      </div>
      <div>
        <label for='checkbox'>Terms and Conditions:</label>
        <input type='checkbox' id='terms' name='checkbox' />
        <span>I have read and agree to the Terms and Conditions</span>
      </div>

      <fieldset>
        <legend>Are you...</legend>
        <input type='radio' />
        <label>Reader</label>
        <br />
        <input type='radio' />
        <label>Writer</label>
        <br />
        <input type='radio' />
        <label>Both</label>
        <br />
      </fieldset>
    </form>
  );
}
