import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/operations';

//

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

export const Login = () => {
  const { error } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          const { email, password } = values;
          // console.log(email, password);
          dispatch(userLogin({ email, password }));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
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
              Login
            </Button>
          </form>
        )}
      </Formik>
      {error && (
        <>
          <p>Can't login this user ...</p>
          <p>Ckeck your email/pass carefuly or try to register. </p>
        </>
      )}
    </>
  );
};
