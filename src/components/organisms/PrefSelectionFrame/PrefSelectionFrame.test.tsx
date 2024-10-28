import { render, screen, fireEvent, act } from '@testing-library/react';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import { Prefecture } from '@/types';
import PrefSelectionFrame from './PrefSelectionFrame';
import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFetchPrefecture');

describe('PrefSelectionFrame Component', () => {
  const mockSetCheckedPrefectures = jest.fn(); // チェックされた都道府県をセットするためのモック関数
  const checkedPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  // コンポーネントをレンダリングするヘルパー関数
  const renderComponent = (prefectures = checkedPrefectures) => {
    render(
      <PrefSelectionFrame
        checkedPrefectures={prefectures}
        setCheckedPrefectures={mockSetCheckedPrefectures}
      />
    );
  };

  beforeEach(() => {
    // モックを設定
    (useFetchPrefecture as jest.Mock).mockReturnValue({
      prefectures: [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 2, prefName: '青森県' },
        { prefCode: 3, prefName: '岩手県' },
      ],
      isError: false,
      isLoading: false,
    });
  });

  // コンポーネントをレンダリングし、ヘッダーと選択されている都道府県が正しく表示されているかを確認
  it('renders the component with the correct header and checked prefectures', () => {
    renderComponent();
    expect(screen.getByText('都道府県を選択')).toBeVisible();
    expect(screen.getByText(`選択件数：${checkedPrefectures.length}件`)).toBeVisible();
  });

  describe('Checkbox interactions', () => {
    // 新しい都道府県のチェックボックスがクリックされたときに、チェックされた都道府県が追加されることを確認
    it('adds a new prefecture when an unchecked checkbox is clicked', async () => {
      renderComponent();
      const newCheckbox = screen.getByLabelText('岩手県');
      await act(async () => {
        fireEvent.click(newCheckbox);
      });
      expect(mockSetCheckedPrefectures).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ prefCode: 1, prefName: '北海道' }),
          expect.objectContaining({ prefCode: 2, prefName: '青森県' }),
          expect.objectContaining({ prefCode: 3, prefName: '岩手県' }),
        ])
      );
    });

    // すでにチェックされている都道府県のチェックボックスが再度クリックされた場合、状態が変わらないことを確認
    it('does not change the state when already checked prefecture is clicked again', async () => {
      renderComponent();
      const checkbox = screen.getByLabelText('北海道');
      await act(async () => {
        fireEvent.click(checkbox);
        fireEvent.click(checkbox);
      });

      expect(mockSetCheckedPrefectures).toHaveBeenCalledWith(
        expect.arrayContaining([checkedPrefectures[0], checkedPrefectures[1]])
      );
    });

    // リセットボタンがクリックされたときに、チェックされた都道府県が空の配列になることを確認
    it('calls setCheckedPrefectures with an empty array when reset is clicked', async () => {
      renderComponent();
      const resetButton = screen.getByRole('button', { name: '選択解除' });
      await act(async () => {
        fireEvent.click(resetButton);
      });
      expect(mockSetCheckedPrefectures).toHaveBeenCalledWith([]);
    });
  });
});
