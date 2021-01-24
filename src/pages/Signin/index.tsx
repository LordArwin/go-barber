import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './style';
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationsErrors';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const HandleForm = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail valido'),
        pass: Yup.string().required().min(6, 'Senha Obrigatoria'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Go Barber" />
        <Form ref={formRef} onSubmit={HandleForm}>
          <h1>Faca seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
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
