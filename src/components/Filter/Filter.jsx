import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { ButtonAdd, Input } from './Filter.styled';

export const Filter = ({ value, onChange, setshowAddContact }) => {
  const handleClick = () => {
    setshowAddContact(true);
  };
  return (
    <Box mb={2} display="flex">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contact"
      ></Input>
      <ButtonAdd name="add" type="submit" onClick={handleClick}>
        +
      </ButtonAdd>
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
