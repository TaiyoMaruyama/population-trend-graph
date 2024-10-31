import { render, screen, waitFor, act } from '@testing-library/react';
import { demoPopulationData, demoPrefectures } from '@/utils/demoData';
import PopulationGraphFrame from './PopulationGraphFrame';
import '@testing-library/jest-dom';

// ResizeObserverのモック
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// RechartsのResponsiveContainerのモック
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: '800px', height: '400px' }}>{children}</div>
    ),
  };
});

// モックデータ
const mockPrefectures = [...demoPrefectures];
const mockPopulationData = [...demoPopulationData];

// fetch APIのモック
beforeAll(() => {
  global.fetch = jest.fn();
});

// window.alertのモック
const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

// 各テストの前にfetchのモックレスポンスを設定
describe('PopulationGraphFrame', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockPopulationData,
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // 各テスト後にモックをクリア
  });

  afterAll(() => {
    alertMock.mockRestore(); // テスト後にalertモックを復元
  });

  // コンポーネントをレンダリングし、初期状態とデータフェッチ後の表示内容を確認
  it('renders correctly and fetches population data', async () => {
    render(<PopulationGraphFrame prefectures={mockPrefectures} />);

    expect(screen.getByText('表示するグラフがありません')).toBeVisible();

    await waitFor(() => {
      expect(screen.getByText('総人口')).toBeVisible();
      expect(screen.getByText('年少人口')).toBeVisible();
      expect(screen.getByText('生産年齢人口')).toBeVisible();
      expect(screen.getByText('老年人口')).toBeVisible();
    });

    expect(fetch).toHaveBeenCalledWith('/api/populationData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefectures: mockPrefectures }),
    });
  });

  // fetchが失敗する場合の挙動を確認
  it('handles fetch error gracefully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Server Error',
    });

    render(<PopulationGraphFrame prefectures={mockPrefectures} />);

    await waitFor(() => {
      expect(screen.getByText('表示するグラフがありません')).toBeVisible();
    });
  });

  // 空の都道府県リストでレンダリングし、適切なメッセージが表示されるか確認
  it('shows no data message when no prefectures are provided', () => {
    render(<PopulationGraphFrame prefectures={[]} />);

    expect(screen.getByText('表示するグラフがありません')).toBeVisible();
    expect(screen.getByText('都道府県を選択してください')).toBeVisible();
  });

  // タブをクリックした際に正しいタブが表示されるか確認
  it('updates selected tab when a tab is clicked', async () => {
    render(<PopulationGraphFrame prefectures={mockPrefectures} />);

    await waitFor(() => expect(screen.getByText('総人口')).toBeVisible());

    const tab = screen.getByText('年少人口');
    await act(async () => {
      tab.click();
    });

    expect(screen.getByText('年少人口')).toBeVisible();
  });
});
