import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';

export const Nav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Navigation as="nav">
        {isLoggedIn ? (
          <NavLink to="contacts">Contacts</NavLink>
        ) : (
          <NavLink to="home">Home</NavLink>
        )}
      </Navigation>
    </>
  );
};
