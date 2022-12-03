import React, { FC } from 'react';

interface InputTextBoxProps {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
  placeholder: string;
}

const InputTextBox: FC<InputTextBoxProps> = ({ children, placeholder, onChange, value }) => (
  <div>
    <label>
      {children}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={''}
      />
    </label>
  </div>
);

export default InputTextBox;
