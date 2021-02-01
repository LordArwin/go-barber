import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from 'react-icons/fi';
import { Container } from './style';
import { ToastMessage, useToast } from '../../../hooks/Toast';

interface ToasProps {
  message: ToastMessage;
}
const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheck size={24} />,
};
const Toast: React.FC<ToasProps> = ({ message }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);
    return () => clearTimeout(timer);
  }, [removeToast, message]);
  return (
    <Container
      type={message.type || 'info'}
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}
      <FiAlertCircle size={20} />
      <div>
        <strong>{message.title}</strong>
        <p>{message.description && message.description}</p>
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
