import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContactsError, selectContactsisLoading } from 'redux/selectors';
import { ContactsList } from '../components/ContactsList/ContactsList';
// import ContactForm from '../components/ContactForm/ContactForm';
import { ContactsFormik } from 'components/ContactsFormik/ContactsFormik';
import { SearchFilter } from '../components/SearchFilter/SearchFilter';
export const Contacts = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  // const { items, isLoading, error } = useSelector(getContacts);
  // const { items, isLoading, error } = useSelector(getContacts);
  // const { isLoading, error } = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsisLoading);
  const error = useSelector(selectContactsError);

  // console.log(items);
  // console.log(isLoading);
  // console.log(error);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <ContactsFormik />
      <h2>Contacts</h2>

      <SearchFilter />
      <ContactsList />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Fetching error, server says: {error}</p>}
    </>
  );
};
