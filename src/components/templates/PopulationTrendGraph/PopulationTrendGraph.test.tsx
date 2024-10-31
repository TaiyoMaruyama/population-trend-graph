import { render, screen, fireEvent, act } from '@testing-library/react';
import useFetchPrefecture from '@/hooks/useFetchPrefecture';
import PopulationTrendGraph from './PopulationTrendGraph';
import '@testing-library/jest-dom';

// ResizeObserverをモック
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: '800px', height: '400px' }}>{children}</div>
    ),
  };
});

jest.mock('../../../hooks/useFetchPrefecture');

describe('PopulationTrendGraph Component', () => {
  beforeEach(() => {
    (useFetchPrefecture as jest.Mock).mockReturnValue({
      prefectures: [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 2, prefName: '青森県' },
        { prefCode: 3, prefName: '岩手県' },
      ],
      isError: false,
      isLoading: false,
    });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  // コンポーネントが正しくレンダリングされることを確認
  it('renders the component with PrefSelectionFrame and PopulationGraphFrame', async () => {
    await act(async () => {
      render(<PopulationTrendGraph />);
    });
    expect(screen.getByText('都道府県を選択')).toBeVisible();
    expect(screen.getByText('選択件数：0件')).toBeVisible();
  });

  describe('Checkbox interactions', () => {
    // チェックボックスがクリックされたときに新しい都道府県が追加されることを確認
    it('adds a new prefecture when an unchecked checkbox is clicked', async () => {
      await act(async () => {
        render(<PopulationTrendGraph />);
      });
      const newCheckbox = screen.getByLabelText('岩手県');
      await act(async () => {
        fireEvent.click(newCheckbox);
      });
      // 選択件数が1件に増加したことを確認
      expect(screen.getByText('選択件数：1件')).toBeVisible();
    });

    // すでにチェックされているチェックボックスがクリックされたときに、選択が解除されることを確認
    it('removes a prefecture when an already checked checkbox is clicked', async () => {
      await act(async () => {
        render(<PopulationTrendGraph />);
      });
      const checkbox = screen.getByLabelText('北海道');
      await act(async () => {
        fireEvent.click(checkbox);
      });

      await act(async () => {
        fireEvent.click(checkbox);
      });
      expect(screen.getByText('選択件数：0件')).toBeVisible();
    });

    // リセットボタンがクリックされたときに、選択が全て解除されることを確認
    it('calls setCheckedPrefectures with an empty array when reset is clicked', async () => {
      await act(async () => {
        render(<PopulationTrendGraph />);
      });
      const resetButton = screen.getByRole('button', { name: '選択解除' });
      await act(async () => {
        fireEvent.click(resetButton);
      });
      expect(screen.getByText('選択件数：0件')).toBeVisible();
    });
  });
});
