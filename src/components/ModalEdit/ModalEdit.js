import React from 'react';

// import { useDisclosure } from '';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';

import { patchContact } from 'redux/operations';

export const EditContact = ({ contact }) => {
  // const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSave = e => {
    e.preventDefault();

    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.number.value);
    // console.log(id);
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    console.log(contact.id, name, number);
    // alert(contact.id, name, number);
    dispatch(patchContact({ id: contact.id, name, number }));
    // e.target.elements.name.value = '';
    // e.target.elements.number.value = '';
    e.target.reset();
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" size="md" onClick={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit contact</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSave}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input name="name" type="text" placeholder="name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Phone number</FormLabel>

                <Input type="tel" name="number" placeholder="phone" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
