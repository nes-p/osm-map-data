import React, { FC } from 'react';
import './style.css';

interface TextBoxProps {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  placeholder?: string;
  isValid?: boolean;
  error?: string;
}

const TextBox: FC<TextBoxProps> = ({
  children,
  placeholder,
  onChange,
  value,
  error,
  isValid = true,
}) => (
  <div className="text-box">
    <label className="text-label">
      {children}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="text-input"
      />
    </label>
    {!isValid && (
      <div className="error" data-testid="error-text-box">
        {error}
      </div>
    )}
  </div>
);

export default TextBox;
