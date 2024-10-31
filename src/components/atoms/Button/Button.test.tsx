import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  const defaultProps = {
    label: 'Click Me',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onClick.mockClear();
  });

  const renderButton = (props = {}) => {
    render(<Button {...defaultProps} {...props} />);
  };

  // 正しいラベルを持っていることを確認
  it('renders the button with the correct label', () => {
    renderButton();
    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.label);
  });

  // クリック時にonClickが呼び出されることを確認
  it('calls onClick when the button is clicked', async () => {
    renderButton();
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  // ボタンが無効なときにonClickが呼び出されないことを確認
  it('does not call onClick when disabled', async () => {
    renderButton({ disabled: true });
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  // disabledプロパティがtrueのときボタンが無効であることを確認
  it('has disabled attribute when disabled prop is true', () => {
    renderButton({ disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
