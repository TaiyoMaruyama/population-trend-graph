import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('Checkbox Component', () => {
  const defaultProps = {
    id: 'test-checkbox',
    label: 'Test Checkbox',
    checked: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onChange.mockClear();
  });

  const renderCheckbox = (props: Partial<CheckboxProps> = {}) => {
    render(<Checkbox {...defaultProps} {...props} />);
  };

  // チェックボックスとそのラベルが正しく表示されることを確認
  it('renders the Checkbox with the correct label', () => {
    renderCheckbox();
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).toBeVisible();
    expect(checkboxElement).toBeInstanceOf(HTMLInputElement);
  });

  // checkedプロパティがtrueのとき、チェックボックスがチェック状態になることを確認
  it('renders the Checkbox as checked when checked prop is true', () => {
    renderCheckbox({ checked: true });
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).toBeChecked();
  });

  // checkedプロパティがfalseのとき、チェックボックスがチェックされていない状態で表示されることを確認
  it('renders the Checkbox as unchecked when checked prop is false', () => {
    renderCheckbox({ checked: false });
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).not.toBeChecked();
  });

  // チェックボックスをクリックした際にonChangeが正しく呼び出されることを確認
  it('triggers onChange when the Checkbox is clicked', () => {
    renderCheckbox();
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    fireEvent.click(checkboxElement);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  // ラベルをクリックした際にonChangeが正しく呼び出されることを確認
  it('triggers onChange when the label is clicked', () => {
    renderCheckbox();
    const labelElement = screen.getByText(defaultProps.label);
    fireEvent.click(labelElement);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
});
