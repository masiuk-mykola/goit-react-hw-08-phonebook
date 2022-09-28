import { useDispatch } from 'react-redux';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { LogOutPanel } from './Logout.styled';

export const Logout = ({ userName }) => {
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const handleClick = () => {
    logOutUser();
    dispatch(logOut());
  };

  return (
    <LogOutPanel>
      <p>Hello, {userName}</p>
      <button onClick={handleClick}>Log Out</button>
    </LogOutPanel>
  );
};
