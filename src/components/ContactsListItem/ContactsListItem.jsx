import { useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/contactsSlice';
import { removeContact } from 'redux/operations';
//
import { BtnDelete } from './ContactsListItem.styled';
// TODO fix delete id
export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));
  return (
    <li key={id}>
      {name}: {number}
      <BtnDelete
        type="button"
        onClick={() => {
          dispatch(handleDelete);
        }}
      >
        delete {id}
      </BtnDelete>
    </li>
  );
};
