import { Button } from '@mui/material';
import { Box } from 'components/Box';
import { Main } from 'components/ContactList/ContactsList.styled';
import { InputAdd } from 'components/Form/Form.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/auth';
import { setCredentials } from 'redux/authSlice';
import * as Yup from 'yup';

export const Registration = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  let schema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });

  const handleSubmitForm = async (values, { resetForm }) => {
    const user = await registerUser(values).unwrap();
    dispatch(setCredentials(user));
    navigate('/contacts');
    resetForm();
  };

  return (
    <Main as="main" p={3}>
      <Box as="h2" textAlign="center">
        To access the application, please register or{' '}
        <Link to="/login">log in</Link> to your account
      </Box>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmitForm}
      >
        <Form>
          <ul>
            <li>
              <label>
                Name
                <InputAdd name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" />
              </label>
            </li>

            <li>
              <label>
                Email
                <InputAdd name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" />
              </label>
            </li>

            <li>
              <label>
                Password
                <InputAdd
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
              </label>
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
