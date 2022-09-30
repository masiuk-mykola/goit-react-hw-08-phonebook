import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const ContactItem = ({ id, name, number }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(10).max(13).required(),
  });

  const [deleteContact, { status }] = useDeleteContactMutation();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [updateContact, { status: update }] = useUpdateContactMutation();

  const handleSubmit = values => {
    const contact = { ...values, id };
    closeModal();
    updateContact(contact);
  };

  const initialValues = { name, number };

  return (
    <li>
      {status === 'pending' || update === 'pending' ? (
        <Loader />
      ) : (
        <>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
          <button onClick={openModal}>Edit</button>
          {showModal && (
            <Modal onCloseModal={closeModal}>
              <h2>Hello</h2>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                <Form>
                  <label>
                    Name
                    <Field type="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                  </label>
                  <label>
                    Phone
                    <Field type="tel" name="number" />
                    <ErrorMessage name="number" component="div" />
                  </label>
                  <Button type="submit" variant="contained">
                    Edit
                  </Button>
                </Form>
              </Formik>
            </Modal>
          )}
        </>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
