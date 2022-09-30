import styled from 'styled-components';

export const Input = styled.input`
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

export const ButtonAdd = styled.button`
  padding: 8px;
  width: 50px;
  height: 100%;
  border-radius: 5px;
  margin-left: 8px;
  color: white;
  background-color: ${p => p.theme.colors.secondary};
  border: 0px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  :hover {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
