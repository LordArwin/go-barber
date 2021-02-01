import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';
import { Container } from './style';

interface ToastContainerProps {
  messages: ToastMessage[];
}
const TostContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default TostContainer;
