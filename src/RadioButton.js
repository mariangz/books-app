import { useState } from 'react';
export default function RadioButton(props) {
  const [user, setUser] = useState(false);

  return (
    <>
      <input
        type='radio'
        id={props.id}
        name='user'
        value={props.value}
        checked={user}
        onChange={() => {
          setUser(!user);
        }}
      />
      <label>{props.label}</label>
    </>
  );
}
