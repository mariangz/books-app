import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { countryList } from './countryList';
import './SignupForm.scss';

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 15) {
//     errors.lastName = 'Must be 15 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.country) {
//     errors.country = 'Required';
//   }
//   if (!values.device) {
//     errors.device = 'Required';
//   }
//   return errors;
// };

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      device: '',
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      country: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const userList = ['reader', 'writer', 'both'];
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='firstName'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='lastName'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor='country'>Choose your country:</label>
        <input
          id='country'
          name='country'
          list='countries'
          onInputChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        <select
          id='device'
          name='device'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.device}
        >
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

      {/* 
      <div>
        <fieldset>
          <legend>Are you...</legend>
          {userList.map((item, index) => (
            <>
              <RadioButton
                key={item}
                id={item}
                value={item}
                checked={item}
                label={item}
              />
              {index !== userList.length - 1 && <br />}
            </>
          ))}
        </fieldset>
      </div>
      <div>
        <label htmlFor='birthday'></label>
        <input type='date' id='birthday' name='birthday'></input>
      </div>
      <div>
        <input type='checkbox' id='terms' name='terms' />
        <label htmlFor='checkbox'>
          I have read and agree to the Terms and Conditions
        </label>
      </div> */}

      <button type='submit'>Submit</button>
    </form>
  );
}
