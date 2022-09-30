import { Main } from 'components/ContactList/ContactsList.styled';
import picture from '../phonebook.png';

export const DesktopApp = () => {
  return (
    <Main textAlign="center" pt={3}>
      <h2>
        You can download the desktop version of the program to your PC from the
        <a href="https://drive.google.com/file/d/18mvEqVtxa9-uwikJkYOn0eLVqhiHb1Dq/view?usp=sharing">
          link
        </a>
      </h2>
      <img src={picture} alt="desktop app" width="800" />
    </Main>
  );
};
