import { render, screen } from '@testing-library/react';
import TextLabel from './TextLabel';
import '@testing-library/jest-dom';

describe('TextLabel', () => {
  it('renders the label text', () => {
    const testLabel = 'Test Label';
    render(<TextLabel label={testLabel} />);

    const labelElement = screen.getByText(testLabel);
    expect(labelElement).toBeVisible();
  });
});
