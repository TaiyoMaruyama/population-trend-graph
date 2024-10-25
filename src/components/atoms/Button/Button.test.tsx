import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  const defaultProps = {
    label: 'Click Me',
    onClick: jest.fn(),
    disabled: false,
  };

  beforeEach(() => {
    defaultProps.onClick.mockClear();
  });

  // ボタンが正しいラベルでレンダリングされることを確認
  it('renders the button with the correct label', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  // ボタンがクリックされた時にonClickが呼び出されることを確認
  it('calls onClick when the button is clicked', async () => {
    render(<Button {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  // ボタンが無効な場合にonClickが呼び出されないことを確認
  it('does not call onClick when disabled', async () => {
    render(<Button {...defaultProps} disabled />);
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  // disabledプロパティがtrueのとき、ボタンが無効であることを確認
  it('has disabled attribute when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
