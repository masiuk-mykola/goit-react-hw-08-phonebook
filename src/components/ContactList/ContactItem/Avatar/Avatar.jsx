import { Avatar } from 'components/ContactList/ContactsList.styled';

export const Avatarka = ({ name }) => {
  const letter = name.split('').slice(0, 1);

  return <Avatar>{letter}</Avatar>;
};
