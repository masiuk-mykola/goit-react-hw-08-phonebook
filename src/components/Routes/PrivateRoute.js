import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getToken } from 'redux/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);
  console.log('PrivateRoute -> token', token);
  console.log('PrivateRoute -> isLoggedIn', isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/registration" />;
};
