import { useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/contactsSlice';
import { removeContact } from 'redux/operations';
import {
  //   List,
  ListItem,
  // ListIcon,
  // OrderedList,
  // UnorderedList,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  //   Stack,
} from '@chakra-ui/react';
//
// import { BtnDelete } from './ContactsListItem.styled';
// TODO fix delete id
export const ContactsListItemStyled = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));
  return (
    <ListItem key={id}>
      <Flex gap={5}>
        {name}: {number}
        <Spacer />
        <ButtonGroup spacing={4} direction="row" align="center">
          <Button colorScheme="teal" size="md">
            Edit
          </Button>
          <Button
            colorScheme="orange"
            size="md"
            onClick={() => {
              dispatch(handleDelete);
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </ListItem>
  );
};
