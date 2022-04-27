import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Email from '../FormComponents/Email';
import TextInput from '../FormComponents/TextInput';
import PasswordInput from '../FormComponents/PasswordInput';
import './SignupForm.scss';
import Checkbox from '../FormComponents/Checkbox';
import Select from '../FormComponents/Select';
import Datalist from '../FormComponents/Datalist';
import Radio from '../FormComponents/Radio';
import Date from '../FormComponents/Date';
import { countryList } from '../FormComponents/countryList';

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        device: '',
        user: 'reader',
        birthday: '',
        password: '',
        confirmPassword: '',
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        country: Yup.string().required('Required'),
        device: Yup.string().required('Required'),
        birthday: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
          .required('Required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <TextInput
          label='First Name'
          name='firstName'
          type='text'
          placeholder='Laura'
        />
        <TextInput
          label='Last Name'
          name='lastName'
          type='text'
          placeholder='Casas'
        />
        <Email
          label='Email'
          name='email'
          type='email'
          placeholder='laura@casas.com'
        />
        <Date label='Birthday' name='birthday' type='date' />
        <Select label='Favorite Device' name='device' />
        <Datalist label='Your Country' name='country' list='countries'>
          <datalist id='countries'>
            {countryList.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </Datalist>
        <Radio label='User' name='user' />
        <PasswordInput label='Password' name='password' type='password' />
        <PasswordInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
        />
        <Checkbox
          label='I have read and agree to the Terms and Conditions'
          name='acceptedTerms'
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
