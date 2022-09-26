import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation.styled';

export const Nav = () => {
  return (
    <>
      <Navigation as="nav">
        <NavLink to="home">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </Navigation>
    </>
  );
};
