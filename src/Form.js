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
    </form>
  );
}
