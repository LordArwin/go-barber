import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './style';
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => {
  function HandleForm(data: object) {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Go Barber" />
        <Form onSubmit={HandleForm}>
          <h1>Faca seu logon</h1>
          <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="pass"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="slsl">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
