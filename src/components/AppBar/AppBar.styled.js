import styled from 'styled-components';
import { Box } from 'components/Box';

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]};
`;
