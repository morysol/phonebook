// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/operations';

import { useFormik } from 'formik';
import {
  Box,
  Button,
  //   Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const ContactsFormik = () => {
  //
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  //
  const isContactExists = (list, value) => {
    let state = false;
    list.forEach(item => {
      if (item.name === value) {
        state = true;
      }
    });
    return state;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      //   rememberMe: false,
    },
    onSubmit: ({ name, number }, actions) => {
      const ifExist = isContactExists(contacts, name);
      //   alert(JSON.stringify(values, null, 2));
      //   alert(JSON.stringify({ name, number, ifExist }, null, 2));

      if (ifExist) {
        alert(` ${window.location.host} says: ${name}  is alredy in contacts.`);
        return;
      }
      dispatch(addContact({ name, number }));
      actions.resetForm();
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="green.50" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="name"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="number">Phone number</FormLabel>
              <Input
                id="number"
                name="number"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.number}
              />
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Add contact
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
