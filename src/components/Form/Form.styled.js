import { Field } from 'formik';
import styled from 'styled-components';

export const InputAdd = styled(Field)`
  font: inherit;
  box-sizing: border-box;
  letter-spacing: inherit;
  color: currentcolor;
  border: 1px solid #10b7f5;
  border-radius: 5px;
  height: 30px;
  margin: 0px;
  margin-bottom: 5px;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 16.5px 14px;

  :focus-visible {
    outline-color: #10b7f5;
  }
`;
