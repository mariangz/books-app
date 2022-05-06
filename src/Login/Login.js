import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../FormComponents/TextInput/TextInput';
import Password from '../FormComponents/Password/Password';
import Button from '../FormComponents/Button/Button';
import '../SignupForm/SignupForm.scss';

export default function Login() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must contain 8 characters, at least one uppercase, one lowercase , one number and one special character'
          ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className='form'>
        <div>
          <h2 className='form__title'>Sign In</h2>
          <hr className='form__line input-container' />
        </div>
        <div className='form__column'>
          <TextInput
            label='Email'
            htmlFor='email'
            name='email'
            id='email'
            type='email'
            placeholder='laura@casas.com'
          />
          <Password
            label='Password'
            htmlFor='password'
            name='password'
            id='password'
          />
          <Button>Log in</Button>
        </div>
      </Form>
    </Formik>
  );
}
