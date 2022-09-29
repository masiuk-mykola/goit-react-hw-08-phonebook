import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/auth';
import { setCredentials } from 'redux/authSlice';
import * as Yup from 'yup';

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  let schema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });

  const handleSubmitForm = async (values, { resetForm }) => {
    const user = await loginUser(values).unwrap();
    console.log('handleSubmitForm -> user', user);
    dispatch(setCredentials(user));
    navigate('/contacts');
    resetForm();
  };

  return (
    <>
      <h1>This is login page</h1>
      <p>nick21722@mail.com</p>
      <p>nick21722</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmitForm}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
