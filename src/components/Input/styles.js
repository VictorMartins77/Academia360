import styled from 'styled-components';

export const Container = styled.div`
  height: 41px;
  width: 313px;
  display: flex;
  align-items: center;

  background-color: white;
  color: black;
  border-radius: 10px;

  > input {
    height: 41px;
    width: 313px;
    color: #4B5563;
    background: transparent;
    border: 0;

    &:placeholder {
      color: #52555A;
    }

    /* New rule to remove focus outline */
    &:focus {
      outline: none;
    }
  }

  > svg {
    margin-left: 16px;
    margin-right:16px;
  }
`;
