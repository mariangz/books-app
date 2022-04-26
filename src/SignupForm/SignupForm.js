import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { countryList } from './countryList';
import './SignupForm.scss';

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      device: '',
      acceptedTerms: false,
    },
    validationSchema: Yup.object({
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
      acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const userList = ['reader', 'writer', 'both'];
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          type='firstName'
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          type='lastName'
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor='country'>Choose your country:</label>
        <input
          id='country'
          list='countries'
          {...formik.getFieldProps('country')}
        />
        <datalist id='countries'>
          {countryList.map((country) => (
            <option value={country} />
          ))}
        </datalist>

        {formik.touched.country && formik.errors.country && (
          <div>{formik.errors.country}</div>
        )}
      </div>
      <div>
        <label>Favorite device</label>
        <select id='device' {...formik.getFieldProps('device')}>
          <option value=''>Choose one</option>
          <option value='book'>Physical Book</option>
          <option value='kindle'>Kindle</option>
          <option value='kobo'>Kobo</option>
          <option value='nook'>Nook</option>
          <option value='other'>Other</option>
        </select>
        {formik.touched.device && formik.errors.device && (
          <div>{formik.errors.device}</div>
        )}
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
        <label htmlFor='birthday'></label>
        <input
          type='date'
          id='birthday'
          {...formik.getFieldProps('birthday')}
        ></input>
        {formik.touched.birthday && formik.errors.birthday && (
          <div>{formik.errors.birthday}</div>
        )}
      </div>
      <div>
        <input
          type='checkbox'
          id='acceptedTerms'
          {...formik.getFieldProps('acceptedTerms')}
        />
        <label htmlFor='checkbox'>
          I have read and agree to the Terms and Conditions
        </label>
        {formik.touched.acceptedTerms && formik.errors.acceptedTerms && (
          <div>{formik.errors.acceptedTerms}</div>
        )}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}
