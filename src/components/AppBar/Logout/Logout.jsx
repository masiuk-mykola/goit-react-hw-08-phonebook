import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { LogOutPanel } from './Logout.styled';

export const Logout = ({ userName }) => {
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const handleClick = () => {
    logOutUser();
    dispatch(logOut());
    navigate('/');
  };

  return (
    <LogOutPanel>
      <p>Hello, {userName}</p>
      <button onClick={handleClick}>Log Out</button>
    </LogOutPanel>
  );
};
