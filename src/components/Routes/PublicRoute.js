import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSelectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  const shouldRedirect = !isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
