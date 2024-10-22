import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import theme from '@/themes/theme';
import Button from './Button';

describe('Button', () => {
  const buttonLabel = 'Click me';
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  // childrenプロップが正しく反映されるか
  it('renders the button with children', () => {
    render(<Button onClick={handleClick}>{buttonLabel}</Button>);
    const buttonElement = screen.getByText(buttonLabel);
    expect(buttonElement).toBeVisible();
  });

  // onClickが正常に動作しているか
  it('calls onClick when clicked', () => {
    render(<Button onClick={handleClick}>{buttonLabel}</Button>);
    const buttonElement = screen.getByText(buttonLabel);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // disabledがtrueの時にonClickイベントが呼ばれないこと
  it('does not call onClick when disabled', () => {
    render(
      <Button onClick={handleClick} disabled>
        {buttonLabel}
      </Button>
    );
    const buttonElement = screen.getByText(buttonLabel);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  // disabledがtrueの状態でのスタイルを確認
  it('has disabled styles when disabled', () => {
    render(
      <Button onClick={() => {}} disabled>
        {buttonLabel}
      </Button>
    );
    const buttonElement = screen.getByText(buttonLabel);
    expect(buttonElement).toHaveAttribute('disabled');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle(`background-color: ${theme.colors.primary.disabled}`);
  });
});
