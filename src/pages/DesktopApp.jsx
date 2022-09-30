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
      <h3>
        To use the desktop version of the application, you need to unzip the
        downloaded archive into and execute file Phonebook.exe
      </h3>
      <img src={picture} alt="desktop app" width="800" />
    </Main>
  );
};
