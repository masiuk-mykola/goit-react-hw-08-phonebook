import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { InputAdd } from './Form.styled';
import { Box } from 'components/Box';

export const ContactForm = ({ onSubmit, setshowAddContact }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(10).max(13).required(),
  });

  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    resetForm();
    onSubmit(contact);
    setshowAddContact(null);
  };

  return (
    <Box mb={2}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <ul>
            <li>
              <label>
                Name
                <InputAdd type="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </label>
            </li>
            <li>
              <label>
                Phone
                <InputAdd type="tel" name="number" />
                <ErrorMessage name="number" component="div" />
              </label>
            </li>
            <li>
              <Button type="submit" variant="contained">
                Add contact
              </Button>
            </li>
          </ul>
        </Form>
      </Formik>
    </Box>
  );
};
