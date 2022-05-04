import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../FormComponents/TextInput/TextInput';
import './SignupForm.scss';
import Checkbox from '../FormComponents/Checkbox/Checkbox';
import Select from '../FormComponents/Select/Select';
import Datalist from '../FormComponents/Datalist/Datalist';
import Password from '../FormComponents/Password/Password';
import Radio from '../FormComponents/Radio/Radio';
import Button from '../FormComponents/Button/Button';
import { countryList } from '../FormComponents/Datalist/countryList';

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        device: '',
        user: '',
        birthday: '',
        password: '',
        confirmPassword: '',
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        country: Yup.string().required('Required'),
        device: Yup.string().required('Required'),
        user: Yup.string().required('A radio option is required'),
        birthday: Yup.string().required('Required'),
        password: Yup.string()
          .required('Required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must contain 8 characters, at least one uppercase, one lowercase , one number and one special character'
          ),
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
      <Form className='form'>
        <div>
          <h2 className='form__title'>Sign Up</h2>
          <hr className='form__line input-container' />
        </div>
        <div className='form__column'>
          <div className='form__names'>
            <TextInput
              label='First Name'
              htmlFor='firstName'
              name='firstName'
              id='firstName'
              type='text'
              placeholder='Laura'
            />
            <TextInput
              label='Last Name'
              htmlFor='lastName'
              name='lastName'
              id='lastName'
              type='text'
              placeholder='Casas'
            />
          </div>

          <TextInput
            label='Email'
            htmlFor='email'
            name='email'
            id='email'
            type='email'
            placeholder='laura@casas.com'
          />
          <TextInput
            label='Birthday'
            htmlFor='birthday'
            name='birthday'
            id='birthday'
            type='date'
          />

          <Datalist
            label='Your Country'
            htmlFor='country'
            name='country'
            id='country'
            list='countries'
          >
            <datalist id='countries'>
              {countryList.map((country) => (
                <option
                  key={country.name}
                  value={country.emoji + ' ' + country.name}
                ></option>
              ))}
            </datalist>
          </Datalist>
          <Radio name='user' />
          <Select
            label='Favorite Device'
            name='device'
            htmlFor='device'
            id='device'
          >
            <option value=''>choose one</option>
            <option value='book'>Physical Book</option>
            <option value='kindle'>Kindle</option>
            <option value='kobo'>Kobo</option>
            <option value='nook'>Nook</option>
            <option value='other'>Other</option>
          </Select>

          <Password
            label='Password'
            htmlFor='password'
            name='password'
            id='password'
          />
          <Password
            label='Confirm Password'
            htmlFor='confirmPassword'
            name='confirmPassword'
            id='confirmPassword'
          />
          <Checkbox
            label='I accept the Terms and Conditions'
            htmlFor='acceptedTerms'
            name='acceptedTerms'
            id='acceptedTerms'
          />
          <Button>Sign Up</Button>
        </div>
      </Form>
    </Formik>
  );
}
