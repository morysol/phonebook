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

export const Login = () => {
  const dispatch = useDispatch();
  // const handleOnSubmit = e => {
  //   e.preventDefault();
  //   //
  //   const email = e.target.form.elements.email.value;
  //   const password = e.target.form.elements.password.value;

  //   dispatch(userLogin({ email, password }));
  // };
  return (
    <>
      {/* <form> */}
      {/* <input type="text" id="email" name="email"></input>
        <input type="password" id="password" name="password"></input> */}
      {/* <button type="summit" onClick={handleOnSubmit}> */}
      {/* log */}
      {/* </button> */}
      {/* </form> */}
      {/* <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="red" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  <Button type="submit" colorScheme="purple" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex> */}
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        onSubmit={values => {
          // alert(JSON.stringify(values, null, 2));
          const { email, password } = values;
          console.log(email, password);
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
            {/* <Field
              as={Checkbox}
              id="rememberMe"
              name="rememberMe"
              colorScheme="purple"
            >
              Remember me?
            </Field> */}
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};
