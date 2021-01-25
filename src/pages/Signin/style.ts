import styled from 'styled-components';
import { shade } from 'polished';
import SigninBg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 10px;
  form {
    margin: 40px 0px;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SigninBg}) no-repeat center;
  background-size: cover;
`;
