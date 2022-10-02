import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/operations';

// export const TaskForm = () => {
//   const dispatch = useDispatch();
//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     dispatch(addTask(event.target.elements.text.value));
//     form.reset();
//   };
//   // Остальное код компонента
// };

//
// import { save } from '../../tools/storage/storage';
// import { addContact } from '../../redux/contactsSlice';

import { AddButton, InputField, Form } from '../ContactForm/ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputName = nanoid();
  const inputNumber = nanoid();

  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const isContactExists = (list, value) => {
    let state = false;
    list.forEach(item => {
      if (item.name === value) {
        state = true;
      }
    });
    return state;
  };

  const formSubmitedContacts = ({ name, number }) => {
    const ifExist = isContactExists(contacts, name);

    if (ifExist) {
      alert(` ${window.location.host} says: ${name}  is alredy in contacts.`);
      return;
    }

    // dispatch(addTask(event.target.elements.text.value));
    // dispatch(addContact({ id: name, name, number }));
    dispatch(addContact({ name, phone: number }));
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    formSubmitedContacts({
      name,
      number,
    });

    // save('contacts', contacts);
    e.target.reset();
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={inputName}>Name</label>
      <InputField
        type="text"
        id={inputName}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={inputNumber}>Number</label>
      <InputField
        type="tel"
        id={inputNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

export default ContactForm;
