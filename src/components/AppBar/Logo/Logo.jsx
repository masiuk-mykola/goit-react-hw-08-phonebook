import { FcBusinessContact } from 'react-icons/fc';
import { LogoStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoStyled>
      <FcBusinessContact />
      <p>Contacts</p>
    </LogoStyled>
  );
};
