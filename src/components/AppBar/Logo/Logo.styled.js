import { Box } from 'components/Box';
import styled from 'styled-components';

export const LogoStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]};
`;
