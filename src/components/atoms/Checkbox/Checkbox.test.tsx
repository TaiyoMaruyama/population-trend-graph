import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

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

  const renderCheckbox = (checked: boolean) => {
    render(<Checkbox {...{ ...defaultProps, checked }} />);
  };

  // チェックボックスとそのラベルが正しく表示されるか
  it('renders the Checkbox with the correct label', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).toBeVisible();
    expect(checkboxElement).toBeInstanceOf(HTMLInputElement);
  });

  // チェックプロップがtrueのとき、チェックボックスが正しくチェック状態になるか
  it('renders the Checkbox as checked when checked prop is true', () => {
    renderCheckbox(true);
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).toBeChecked();
  });

  // チェックプロップがfalseのとき、チェックボックスがチェックされていない状態で表示されるか
  it('renders the Checkbox as unchecked when checked prop is false', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    expect(checkboxElement).not.toBeChecked();
  });

  // チェックボックスをクリックした際にonChangeが正しく呼び出されるか
  it('triggers onChange when the Checkbox is clicked', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    fireEvent.click(checkboxElement);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  // ラベルをクリックした際にonChangeが正しく呼び出されるか
  it('triggers onChange when the label is clicked', () => {
    renderCheckbox(false);
    const labelElement = screen.getByText(defaultProps.label);
    fireEvent.click(labelElement);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  // チェックボックスが無効のときonChangeが呼び出されないか
  it('does not trigger onChange when Checkbox is clicked', () => {
    renderCheckbox(false);
    const checkboxElement = screen.getByLabelText(defaultProps.label);
    fireEvent.click(checkboxElement);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
});
