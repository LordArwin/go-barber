import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
  isError: boolean;
}
export const Container = styled.div<ContainerProps>`
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
  ${props =>
    props.isError &&
    css`
      border: 2px solid #c53030;
    `}
  ${props =>
    props.isFocus &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
`;

export const Error = styled(Tooltip)`
  margin-left: 8px;
  height: 20px;
  svg {
    margin: 0;
  }
  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
