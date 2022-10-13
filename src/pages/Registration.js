import { useDispatch } from 'react-redux';
import { userSignup } from 'redux/operations';

import { Formik, Field } from 'formik';
import {
  // Box,
  Button,
  // Checkbox,
  // Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  // VStack,
} from '@chakra-ui/react';

import { useAuth } from 'hooks/useAuth';

export const Registration = () => {
  //
  const { error } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
        }}
        onSubmit={values => {
          const { name, email, password } = values;
          // console.log(name, email, password);
          // dispatch(userLogin({ email, password }));
          dispatch(userSignup({ name, email, password }));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">Name </FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="name"
                variant="filled"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
              />
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                variant="filled"
                validate={value => {
                  let error;

                  if (value.length < 5) {
                    error = 'Password must contain at least 6 characters';
                  }

                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Register
            </Button>
          </form>
        )}
      </Formik>
      {error && (
        <>
          <p>Can't register this user, server return ...</p>
          <p>{error}</p>
        </>
      )}
    </>
  );
};
