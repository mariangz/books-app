import './Button.scss';

export default function Button({ children }) {
  return (
    <button type='submit' className='button input-container'>
      {children}
    </button>
  );
}
