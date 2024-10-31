import { render, screen } from '@testing-library/react';
import Typography from './Typography';
import styles from './Typography.module.scss';
import '@testing-library/jest-dom';

describe('Typography Component', () => {
  // デフォルトの段落タグとテキストがレンダリングされることを確認
  it('renders with default paragraph tag and text', () => {
    render(<Typography text='Default Text' />);
    const element = screen.getByText(/Default Text/i);
    expect(element).toBeVisible();
    expect(element.tagName).toBe('P'); // デフォルトは <p> タグ
  });

  // 指定された見出しタグでレンダリングされることを確認
  it('renders with specified heading tag', () => {
    render(<Typography variant='h1' text='Heading Text' />);
    const element = screen.getByText(/Heading Text/i);
    expect(element).toBeVisible();
    expect(element.tagName).toBe('H1');
  });

  // boldプロパティがtrueのとき、太字のスタイルが適用されることを確認
  it('renders bold text when bold prop is true', () => {
    render(<Typography text='Bold Text' bold={true} />);
    const element = screen.getByText(/Bold Text/i);
    expect(element).toBeVisible();
    expect(element).toHaveClass(styles.textBold);
  });

  // boldプロパティがfalseのとき、太字のスタイルが適用されないことを確認
  it('does not render bold text when bold prop is false', () => {
    render(<Typography text='Regular Text' bold={false} />);
    const element = screen.getByText(/Regular Text/i);
    expect(element).toBeVisible();
    expect(element).not.toHaveClass(styles.textBold);
  });
});
