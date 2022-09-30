import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { status }] = useDeleteContactMutation();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <li>
      {status === 'pending' ? (
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
