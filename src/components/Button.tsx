import React, { FC } from 'react';
// import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="local-button">
      {children}
    </button>
  );
};
export default Button;
