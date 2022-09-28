import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from 'redux/auth';
import { setCredentials } from 'redux/authSlice';
import * as Yup from 'yup';

export const Registration = () => {
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
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmitForm}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
