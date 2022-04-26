import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { countryList } from './countryList';
import './SignupForm.scss';

export default function SignupForm() {
  const userList = ['reader', 'writer', 'both'];
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        device: '',
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
        confirmPassword: Yup.string().required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' type='firstName' />
          <ErrorMessage name='firstName' />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' type='lastName' />
          <ErrorMessage name='lastName' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />
        </div>
        <div>
          <label htmlFor='country'>Country</label>
          <Field name='country' list='countries' />
          <datalist id='countries'>
            {countryList.map((country) => (
              <option value={country} />
            ))}
          </datalist>
          <ErrorMessage name='country' />
        </div>
        <div>
          <label htmlFor='device'>Favorite device</label>
          <Field name='device' as='select'>
            <option value=''>Choose one</option>
            <option value='book'>Physical Book</option>
            <option value='kindle'>Kindle</option>
            <option value='kobo'>Kobo</option>
            <option value='nook'>Nook</option>
            <option value='other'>Other</option>
          </Field>
          <ErrorMessage name='device' />
        </div>

        <div>
          <fieldset>
            <legend>Are you...</legend>
            {userList.map((item, index) => (
              <div>
                <input
                  type='radio'
                  key={item}
                  id={item}
                  name='user'
                  value={item}
                />
                <label htmlFor={item}>{item}</label>
                {index !== userList.length - 1 && <br />}
              </div>
            ))}
          </fieldset>
        </div>
        <div>
          <label htmlFor='birthday'>Birthday</label>
          <Field name='birthday' type='date' />
          <ErrorMessage name='birthday' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' type='password' />
          <ErrorMessage name='password' />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <Field name='confirmPassword' type='password' />
          <ErrorMessage name='confirmPassword' />
        </div>
        <div>
          <label htmlFor='acceptedTerms'>
            I have read and agree to the Terms and Conditions
          </label>
          <Field name='acceptedTerms' type='checkbox' />
          <ErrorMessage name='acceptedTerms' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
