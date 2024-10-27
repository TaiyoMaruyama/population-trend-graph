import { render, screen } from '@testing-library/react';
import CheckedManageFrame from './CheckedManageFrame';
import styles from './CheckedManageFrame.module.scss';
import '@testing-library/jest-dom';

describe('CheckedManageFrame Component', () => {
  const mockOnReset = jest.fn();

  // checkedSumが0より大きい場合のテスト
  it('renders the correct text and enables the button when checkedSum is greater than 0', () => {
    render(<CheckedManageFrame checkedSum={5} onReset={mockOnReset} />);

    const textElement = screen.getByText(/選択件数：5件/i);
    expect(textElement).toBeVisible();

    const buttonElement = screen.getByRole('button', { name: /選択解除/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toBeEnabled();
  });

  // checkedSumが0の場合のテスト
  it('renders the correct text and disables the button when checkedSum is 0', () => {
    render(<CheckedManageFrame checkedSum={0} onReset={mockOnReset} />);

    const textElement = screen.getByText(/選択件数：0件/i);
    expect(textElement).toBeVisible();

    const buttonElement = screen.getByRole('button', { name: /選択解除/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toBeDisabled();
  });

  // ボタンがクリックされたときにonResetが呼ばれることを確認
  it('calls onReset when the button is clicked', () => {
    render(<CheckedManageFrame checkedSum={5} onReset={mockOnReset} />);

    const buttonElement = screen.getByRole('button', { name: /選択解除/i });
    buttonElement.click();

    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });

  // スタイルが正しく適用されていることを確認
  it('has the correct frame class', () => {
    const { container } = render(<CheckedManageFrame checkedSum={5} onReset={mockOnReset} />);
    const frameElement = container.querySelector('div');
    expect(frameElement).toHaveClass(styles.frame);
  });
});
