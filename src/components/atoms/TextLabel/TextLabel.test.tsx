import { render, screen } from '@testing-library/react';
import TextLabel from './TextLabel';
import '@testing-library/jest-dom';

describe('TextLabel Component', () => {
  // ラベルテキストが正しく表示されていることを確認
  it('renders the label text', () => {
    const testLabel = 'Test Label';
    render(<TextLabel label={testLabel} />);
    const labelElement = screen.getByText(testLabel);
    expect(labelElement).toBeVisible();
  });
});
