import React, { FC } from 'react';
import './style.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className="local-button">
      {children}
    </button>
  );
};
export default Button;
