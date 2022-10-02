import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContactsError, selectContactsisLoading } from 'redux/selectors';

import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';

import { Container } from './App.styled';

export const App = () => {
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
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <SearchFilter />
      <ContactsList />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Fetching error, server says: {error}</p>}
    </Container>
  );
};

export default App;

//  <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
