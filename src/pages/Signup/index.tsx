import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationsErrors';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const HandleForm = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Username obrigatorio'),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail valido'),
        password: Yup.string()
          .required()
          .min(6, 'Senha com no minimo 6 caracteres'),
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
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={HandleForm}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Username" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
