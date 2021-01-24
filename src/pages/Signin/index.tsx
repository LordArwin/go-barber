import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo Go Barber" />
      <form>
        <h1>Faca seu logon</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="slsl">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
