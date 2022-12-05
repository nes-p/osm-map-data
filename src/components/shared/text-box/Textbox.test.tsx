import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  const callMock = jest.fn();
  const TEST_NAME = 'TEST_NAME';

  it('should display title', () => {
    render(<TextBox>{TEST_NAME}</TextBox>);
    const name = screen.getByText(/TEST_NAME/i);
    expect(name).toBeInTheDocument();
  });

  it('should call callback', () => {
    render(<TextBox onChange={callMock}>{TEST_NAME}</TextBox>);
    const input = screen.getByLabelText(TEST_NAME);
    fireEvent.change(input, { target: { value: '123' } });
    expect(callMock).toBeCalledTimes(1);
  });

  it('should have placeholder', () => {
    const PLACEHOLDER = 'TEST_PLACEHOLDER';
    render(<TextBox placeholder={PLACEHOLDER} onChange={callMock} />);
    const text = screen.getByPlaceholderText(/TEST_PLACEHOLDER/i);
    expect(text).toBeInTheDocument();
  });
  it('should display value', () => {
    const TEST_INPUT = 123;
    render(
      <TextBox value={TEST_INPUT} onChange={callMock}>
        {TEST_NAME}
      </TextBox>
    );
    const input = screen.getByLabelText(TEST_NAME);

    expect(input).toHaveDisplayValue('123');
  });
  it('should display error', () => {
    const TEST_ERROR_TEXT = 'TEST_ERROR_TEXT';
    render(
      <TextBox isValid={false} error={TEST_ERROR_TEXT}>
        {TEST_NAME}
      </TextBox>
    );
    const error = screen.getByText(/TEST_ERROR_TEXT/i);
    expect(error).toBeInTheDocument();
  });
});
