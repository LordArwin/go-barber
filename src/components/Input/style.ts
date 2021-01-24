import styled from 'styled-components';

export const Container = styled.div`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 8px;
  }
`;
