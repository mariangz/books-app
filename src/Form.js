import { useState } from 'react';

export default function Form() {
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
    </form>
  );
}
