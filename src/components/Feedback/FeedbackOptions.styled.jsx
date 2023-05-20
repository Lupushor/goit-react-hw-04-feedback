import styled from 'styled-components';

export const ButtonLayout = styled.div`
  display: block;
`;

export const ButtonList = styled.ul`
  list-style-type: none;
  padding: 5px;
  margin: 4px;
`;

export const ButtonItem = styled.li`
  display: inline-flex;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 5px;
  width: 80px;
  border: none;
  background-color: #bfd6f3;
  border-radius: 3px;

  &:hover {
    background-color: #4ac2f1df;
    border: none;
  }
`;
