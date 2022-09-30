import styled from 'styled-components';
import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]};
  border-bottom: 2px sold;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: white;
  display: block;
  &.active {
    color: black;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: black;
  }
`;
