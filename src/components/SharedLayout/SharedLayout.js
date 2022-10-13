import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/operations';
//
import { Divider, Text, Flex } from '@chakra-ui/react';

import { ArrowRightIcon } from '@chakra-ui/icons';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react';
//
import { Container } from '../App.styled';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <>
      <Container>
        <header style={{ width: '75%', margin: '50px auto' }}>
          <Flex justifyContent="space-between">
            <Text mb={7}>Welcome, {user.name ? user.name : ' anonymous!'}</Text>
            {user.name && (
              <Button
                colorScheme="teal"
                size="md"
                onClick={() => {
                  dispatch(userLogout());
                }}
              >
                logout
              </Button>
            )}
          </Flex>
          <Divider orientation="horizontal" />

          <Breadcrumb
            color="blue.600"
            spacing={8}
            separator={<ArrowRightIcon color="gray.500" />}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {isLoggedIn && (
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/contacts">
                  Contacts
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}

            {!isLoggedIn && (
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/login">
                  login
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {!isLoggedIn && (
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/registration">
                  registration
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </header>
        <Outlet />
      </Container>
    </>

    //
  );
};
