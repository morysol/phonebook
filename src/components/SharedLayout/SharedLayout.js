import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//
import { Container } from '../App.styled';

export const SharedLayout = () => {
  return (
    //
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/registration">registration</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
