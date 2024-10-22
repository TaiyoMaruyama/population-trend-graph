import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './Typography';

describe('Typography', () => {
  const testText = 'Test Text';

  // テキストを代入して該当のテキストが要素に含まれるか
  it('renders the Typography text', () => {
    render(<Typography>{testText}</Typography>);
    const labelElement = screen.getByText(testText);
    expect(labelElement).toBeVisible();
  });

  // デフォルトのvariantが正しくレンダリングされるか
  it('renders with default variant (h6)', () => {
    render(<Typography>{testText}</Typography>);
    const labelElement = screen.getByText(testText);
    expect(labelElement.tagName).toBe('H6');
  });

  // カスタムバリアントが正しくレンダリングされるかテスト
  it('renders with custom variant (h1)', () => {
    render(<Typography variant='h1'>{testText}</Typography>);
    const labelElement = screen.getByText(testText);
    expect(labelElement.tagName).toBe('H1');
  });

  // boldプロップが正しく反映されるかテスト
  it('applies bold styling when bold prop is true', () => {
    render(<Typography bold>{testText}</Typography>);
    const labelElement = screen.getByText(testText);
    expect(labelElement).toHaveStyle('font-weight: bold');
  });

  // childrenプロップが正しくレンダリングされるかテスト
  it('renders children correctly', () => {
    const testChild = <span>{testText}</span>;
    render(<Typography>{testChild}</Typography>);
    const labelElement = screen.getByText(testText);
    expect(labelElement).toBeVisible();
  });
});
