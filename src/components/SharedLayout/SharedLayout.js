import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/operations';
//
import { Container } from '../App.styled';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    //
    <Container>
      <header style={{ width: '75%', margin: '50px auto' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">Home</NavLink>

          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <p>Welcome, {user.name}</p>
              <button
                type="button"
                onClick={() => {
                  dispatch(userLogout());
                }}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">login</NavLink>
              <NavLink to="/registration">registration</NavLink>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
