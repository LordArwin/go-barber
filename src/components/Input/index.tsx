import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    setIsError(!!error);
  }, [fieldName, registerField, error]);
  const HandleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const HandleBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);
  const HandleError = useCallback(() => {
    setIsError(false);
  }, []);
  return (
    <Container isError={isError} isFilled={isFilled} isFocus={isFocus}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        onChange={HandleError}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
      {isError && error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
