import { ContactForm } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';
import { Loader } from '../components/Loader/Loader';
import { useState } from 'react';
import { Main } from 'components/ContactList/ContactsList.styled';

export const Contacts = () => {
  const [showAddContact, setshowAddContact] = useState(null);

  const dispatch = useDispatch();

  const { data: contacts, isFetching, isLoading } = useGetContactsQuery();
  const [addContact, { status }] = useAddContactMutation();
  const filterState = useSelector(state => state.filter.value);

  const handleSubmitForm = contact => {
    contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(` ${contact.name} is already in contacts`)
      : addContact(contact);
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const normalFilter = filterState.toLowerCase();
  if (!contacts) {
    return;
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );
  return (
    <Main as="main" p={2}>
      {status === 'pending' && <Loader />}
      <Filter
        value={filterState}
        onChange={changeFilter}
        setshowAddContact={setshowAddContact}
      />
      {showAddContact && (
        <ContactForm
          onSubmit={handleSubmitForm}
          setshowAddContact={setshowAddContact}
        />
      )}

      {isLoading && <Loader />}

      {!isFetching && contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} />
      ) : (
        <h3>Please, add new contact</h3>
      )}
    </Main>
  );
};
