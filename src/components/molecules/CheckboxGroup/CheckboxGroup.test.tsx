import { render, screen, fireEvent } from '@testing-library/react';
import { Prefecture } from '@/types';
import CheckboxGroup from './CheckboxGroup';
import '@testing-library/jest-dom';

const prefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
];

describe('CheckboxGroup Component', () => {
  const mockHandleCheck = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // CheckboxGroupをレンダリングするヘルパー関数
  const renderCheckboxGroup = (checkedList: Prefecture[] = []) => {
    render(
      <CheckboxGroup
        prefectures={prefectures}
        checkedList={checkedList}
        handleCheck={mockHandleCheck}
      />
    );
  };

  // 各都道府県のチェックボックスが正しくレンダリングされているか確認
  it('renders checkboxes for each prefecture', () => {
    renderCheckboxGroup();
    prefectures.forEach(({ prefName }) => {
      expect(screen.getByLabelText(prefName)).toBeVisible();
    });
  });

  // 北海道のチェックボックスをクリックしてhandleCheckが正しい値で呼び出されたか確認
  it('calls handleCheck with correct values when checkbox is checked', () => {
    renderCheckboxGroup();
    fireEvent.click(screen.getByLabelText('北海道'));
    expect(mockHandleCheck).toHaveBeenCalledWith({ prefCode: 1, prefName: '北海道' });
  });

  // 北海道がチェックされた状態でCheckboxGroupをレンダリングし
  // 北海道のチェックボックスをクリックしてチェックを外す
  // handleCheckが再び呼び出されるか確認
  it('calls handleCheck to remove the prefecture when checkbox is unchecked', () => {
    renderCheckboxGroup([{ prefCode: 1, prefName: '北海道' }]);
    fireEvent.click(screen.getByLabelText('北海道'));
    expect(mockHandleCheck).toHaveBeenCalledWith({ prefCode: 1, prefName: '北海道' });
  });

  // 北海道がチェックされている状態でCheckboxGroupをレンダリング
  // 北海道がチェックされていて、青森県がチェックされていないことを確認
  it('correctly reflects checked state of checkboxes', () => {
    renderCheckboxGroup([{ prefCode: 1, prefName: '北海道' }]);

    const checkedCheckbox = screen.getByLabelText('北海道');
    const uncheckedCheckbox = screen.getByLabelText('青森県');
    expect(checkedCheckbox).toBeChecked();
    expect(uncheckedCheckbox).not.toBeChecked();
  });
});
