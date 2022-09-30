import { Button } from '@mui/material';
import { Box } from 'components/Box';
import { Main } from 'components/ContactList/ContactsList.styled';
import { InputAdd } from 'components/Form/Form.styled';
import { Formik, Form, ErrorMessage } from 'formik';
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
    dispatch(setCredentials(user));
    navigate('/contacts');
    resetForm();
  };

  return (
    <Main as="main" p={3}>
      <Box as="h2" textAlign="center">
        To access the application, please log into your account
      </Box>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmitForm}
      >
        <Form>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <InputAdd name="email" type="email" />
              <ErrorMessage name="email" />
            </li>

            <li>
              <label htmlFor="password">Password</label>
              <InputAdd name="password" type="password" />
              <ErrorMessage name="password" />
            </li>

            <li>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </li>
          </ul>
        </Form>
      </Formik>
    </Main>
  );
};
