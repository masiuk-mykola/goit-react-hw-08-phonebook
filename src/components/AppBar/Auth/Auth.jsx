import { NavLink } from 'react-router-dom';
import { AuthList } from './Auth.styled';

export const Auth = () => {
  return (
    <AuthList>
      <NavLink to="registration">Registration</NavLink>
      <NavLink to="login">Log In</NavLink>
    </AuthList>
  );
};
