import { useSelector } from 'react-redux';
import { getUserName } from 'redux/authSelectors';
import { Header } from './AppBar.styled';
import { Auth } from './Auth/Auth';
import { Logo } from './Logo/Logo';
import { Logout } from './Logout/Logout';
import { Nav } from './Navigation/Navigation';

export const AppBar = () => {
  const userName = useSelector(getUserName);
  return (
    <Header as="header">
      <Logo />
      <Nav />
      {userName ? <Logout userName={userName} /> : <Auth />}
    </Header>
  );
};
