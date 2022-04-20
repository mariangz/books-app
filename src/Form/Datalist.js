import { countryList } from './countryList';

export default function Datalist(props) {
  return (
    <>
      <label for='country'>Choose your country:</label>
      <input
        list='countries'
        id='country'
        name='country'
        onChange={props.onInputChange}
      />
      <datalist id='countries'>
        {countryList.map((country) => (
          <option value={country} />
        ))}
      </datalist>
    </>
  );
}
