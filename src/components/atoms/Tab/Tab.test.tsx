import { render, screen, fireEvent } from '@testing-library/react';
import theme from '@/themes/theme';
import Tab from './Tab';
import '@testing-library/jest-dom';

describe('Tab', () => {
  const tabLabel = 'Test Tab';
  const handleClick = jest.fn();
  const { background, text } = theme.colors;

  beforeEach(() => {
    handleClick.mockClear();
  });

  // Tabのラベルが正しく反映しているか
  it('renders the tab with the correct label', () => {
    render(<Tab label={tabLabel} selected={false} onClick={() => {}} />);
    const tabElement = screen.getByText(tabLabel);
    expect(tabElement).toBeVisible();
  });

  // onClickが正常に動作しているか
  it('calls onClick when clicked', () => {
    render(<Tab label={tabLabel} selected={false} onClick={handleClick} />);
    const buttonElement = screen.getByText(tabLabel);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // selectedがtrueの場合のスタイルをテスト
  it('test styles when selected is true', () => {
    render(<Tab label={tabLabel} selected={true} onClick={handleClick} />);
    const buttonElement = screen.getByText(tabLabel);
    expect(buttonElement).toHaveStyle({
      cursor: 'default',
      color: text.white,
    });
  });

  // selectedがfalseの場合のスタイルをテスト
  it('test no-selected styles when selected is false', () => {
    render(<Tab label={tabLabel} selected={false} onClick={handleClick} />);
    const buttonElement = screen.getByText(tabLabel);
    expect(buttonElement).toHaveStyle({
      cursor: 'pointer',
      color: text.primary,
    });
  });

  // Hover時のスタイルをテスト
  it('hover styles when not selected and hovered', () => {
    render(<Tab label={tabLabel} selected={false} onClick={handleClick} />);
    const buttonElement = screen.getByText(tabLabel);
    fireEvent.mouseOver(buttonElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: background.lightgrey,
    });
  });
});
