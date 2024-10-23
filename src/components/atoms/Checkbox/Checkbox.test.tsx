import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const testLabel = 'Test Checkbox';
  const testId = 'test-checkbox';
  let mockOnChange: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  const renderCheckbox = (checked: boolean) =>
    render(<Checkbox id={testId} label={testLabel} checked={checked} onChange={mockOnChange} />);

  // チェックボックスとそのラベルが正しく表示されるか
  it('renders the Checkbox with the correct label', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(testLabel);
    expect(checkboxElement).toBeVisible();
    expect(checkboxElement).toBeInstanceOf(HTMLInputElement);
  });

  // チェックプロップがtrueのとき、チェックボックスが正しくチェック状態になるか
  it('renders the Checkbox as checked when checked prop is true', () => {
    renderCheckbox(true);
    const checkboxElement = screen.getByLabelText(testLabel);
    expect(checkboxElement).toBeChecked();
  });

  // チェックプロップがfalseのとき、チェックボックスがチェックされていない状態で表示されるか
  it('renders the Checkbox as unchecked when checked prop is false', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(testLabel);
    expect(checkboxElement).not.toBeChecked();
  });

  // チェックボックスをクリックした際にonChangeが正しく呼び出されるか
  it('triggers onChange when the Checkbox clicked', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(testLabel);
    fireEvent.click(checkboxElement);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  // ラベルをクリックした際にonChangeが正しく呼び出されるか
  it('triggers onChange when the label is clicked', () => {
    renderCheckbox(false);
    const labelElement = screen.getByText(testLabel);
    fireEvent.click(labelElement);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
