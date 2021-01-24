import styled from 'styled-components';
import { shade } from 'polished';
import SignupBg from '../../assets/sign-up-background.png';

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
    width: 300px;
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
    color: #f4ede8;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignupBg}) no-repeat center;
  background-size: cover;
`;
