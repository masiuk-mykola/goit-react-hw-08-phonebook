import { Box } from 'components/Box';
import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 5px;
  /* border: 1px solid #0778d6; */
  border-radius: 10px;
  padding: ${p => p.theme.space[1]};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: 600;
  padding: ${p => p.theme.space[1]};
`;

export const Avatar = styled(Box)`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  color: white;
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: 600;
  margin-right: ${p => p.theme.space[3]};
`;

export const Number = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: 600;
  padding: ${p => p.theme.space[1]};
  color: grey;
`;

export const Main = styled(Box)`
  flex: 1 0 auto;
  width: 800px;
  margin: 0 auto;
`;
