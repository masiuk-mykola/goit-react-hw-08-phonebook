import { Box } from 'components/Box';
import styled from 'styled-components';

export const FooterStyled = styled(Box)`
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[3]};
  color: white;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-align: center;
`;
