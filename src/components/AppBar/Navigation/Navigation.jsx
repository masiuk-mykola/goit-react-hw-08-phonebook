import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation.styled';
import { useSelector } from 'react-redux';

export const Nav = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <Navigation as="nav">
        {token ? (
          <NavLink to="contacts">Contacts</NavLink>
        ) : (
          <NavLink to="home">Home</NavLink>
        )}
      </Navigation>
    </>
  );
};
