import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  const defaultProps: { label: string; disabled?: boolean; onClick: jest.Mock } = {
    label: 'Click Me',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onClick.mockClear();
  });

  it('renders the button with the correct label', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('calls onClick when the button is clicked', async () => {
    render(<Button {...defaultProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    render(<Button {...defaultProps} disabled={true} />);
    await userEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it('has disabled attribute when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
