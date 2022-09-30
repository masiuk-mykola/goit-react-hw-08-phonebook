import { Box } from 'components/Box';
import { Name } from 'components/ContactList/ContactsList.styled';
import picture from '../home.png';
export const Home = () => {
  return (
    <Box textAlign="center">
      <h1>Welcome to this App</h1>
      <Name>Using this app, you can easily store your contacts</Name>
      <img src={picture} alt="home" width="1000px" />
    </Box>
  );
};
