import { render, screen } from '@testing-library/react';
import Header from './Header';
import styles from './Header.module.scss';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  // タイトルが正しく表示されることを確認
  it('renders with the given title', () => {
    render(<Header title='Test Title' />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeVisible();
  });

  // Headerのスタイルが正しく適用されていることを確認
  it('has the correct header class', () => {
    const { container } = render(<Header title='Test Title' />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass(styles.header);
  });
});
