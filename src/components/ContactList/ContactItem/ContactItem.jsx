import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import Button from '@mui/material/Button';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Item, Name, Number } from '../ContactsList.styled';
import { Box } from 'components/Box';
import { Avatarka } from './Avatar/Avatar';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { InputAdd } from 'components/Form/Form.styled';

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
    <Item>
      {status === 'pending' || update === 'pending' ? (
        <Loader />
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            mb={2}
            justifyContent="space-between"
          >
            <Avatarka name={name} />
            <Box textAlign="center">
              <Name>{name}</Name>
              <Number>{number}</Number>
            </Box>
            <Box display="flex" gridGap="20px">
              <AiFillEdit size={24} color={'#0778d6'} onClick={openModal} />

              <AiFillDelete
                size={24}
                color={'red'}
                onClick={() => deleteContact(id)}
              />
            </Box>
          </Box>

          {showModal && (
            <Modal onCloseModal={closeModal}>
              <h3>Please, edit your contact</h3>
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
                        Edit
                      </Button>
                    </li>
                  </ul>
                </Form>
              </Formik>
            </Modal>
          )}
        </>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
