import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tab from './Tab';
import { TabProps } from './Tab.types';

describe('Tab Component', () => {
  const defaultProps = {
    label: 'Test Tab',
    selected: false,
    disabled: false,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    defaultProps.onClick.mockClear();
  });

  const renderTab = (props: Partial<TabProps> = {}) => {
    render(<Tab {...defaultProps} {...props} />);
  };

  // 正しいラベルが表示されることを確認
  it('renders with the correct label', () => {
    renderTab();
    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.label);
  });

  // selectedプロパティがtrueのとき、適切なスタイルが適用されることを確認
  it('applies selected styles when selected is true', () => {
    renderTab({ selected: true });
    expect(screen.getByRole('button')).toHaveClass('selected');
  });

  // selectedプロパティがtrueのとき、onClickが呼び出されないことを確認
  it('does not call onClick when selected', () => {
    renderTab({ selected: true });
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  // selectedプロパティがfalseのとき、onClickが呼び出されることを確認
  it('calls onClick when not selected', () => {
    renderTab({ selected: false });
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  // disabledプロパティがtrueのとき、onClickが呼び出されないことを確認
  it('does not call onClick when disabled', () => {
    renderTab({ disabled: true });
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  // disabledプロパティがtrueのとき、buttonがdisabled属性を持つことを確認
  it('has the disabled attribute when disabled is true', () => {
    renderTab({ disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
