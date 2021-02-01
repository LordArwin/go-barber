import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}
const ToastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};
export const Container = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => ToastTypes[props.type || `info`]}

  > svg {
    margin: 5px 12px 0 0;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      opacity: 0.8;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    color: inherit;
    border: 0;
    opacity: 0.6;
    background: transparent;
  }
  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      > svg {
        margin-top: 0;
      }
    `}
`;
