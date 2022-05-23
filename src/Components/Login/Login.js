import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import TextInput from '../FormComponents/TextInput/TextInput';
import Password from '../FormComponents/Password/Password';
import Button from '../FormComponents/Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import '../SignupForm/SignupForm.scss';

export default function Login(props) {
  const navigate = useNavigate();
  const context = useContext(ThemeContext);

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
        props.handleUser(true);
        context.setUser(values.name);
        navigate('/books');
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
          <Button type='submit'>Log in</Button>
        </div>
      </Form>
    </Formik>
  );
}
