import { useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/contactsSlice';
import { removeContact } from 'redux/operations';
import {
  //   List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { EditContact } from '../ModalEdit/ModalEdit';

export const ContactsListItemStyled = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));
  return (
    <ListItem key={id}>
      <Flex gap={5} alignItems="center">
        <ListIcon as={StarIcon} color="teal" w={4} />
        {name}: {number}
        <Spacer />
        <ButtonGroup spacing={4} direction="row" align="center">
          {/* <Button colorScheme="teal" size="md">
            Edit
          </Button> */}
          <EditContact contact={{ id, name, number }} />
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
