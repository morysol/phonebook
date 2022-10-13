import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContactsError, selectContactsisLoading } from 'redux/selectors';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactsFormik } from 'components/ContactsFormik/ContactsFormik';
import { SearchFilterStyled } from '../components/SearchFilter/SearchFilterStyled';
export const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsisLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsFormik />
      <h2>Contacts</h2>

      <SearchFilterStyled />
      <ContactsList />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Fetching error, server says: {error}</p>}
    </>
  );
};
