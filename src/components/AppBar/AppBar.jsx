import { Header } from './AppBar.styled';
import { Auth } from './Auth/Auth';
import { Logo } from './Logo/Logo';
import { Nav } from './Navigation/Navigation';

export const AppBar = () => {
  return (
    <Header as="header">
      <Logo />
      <Nav />
      <Auth />
    </Header>
  );
};
