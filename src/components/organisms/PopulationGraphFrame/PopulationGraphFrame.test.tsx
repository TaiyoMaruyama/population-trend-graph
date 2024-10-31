import { render, screen, waitFor } from '@testing-library/react';
import fetchPopulationData from '@/app/api/fetchPopulationData';
import { demoPopulationData, demoPrefectures } from '@/utils/demoData';
import PopulationGraphFrame from './PopulationGraphFrame';
import '@testing-library/jest-dom';

// ResizeObserverをモック
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// RechartsのResponsiveContainerをモック
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: '800px', height: '400px' }}>{children}</div>
    ),
  };
});

const mockPrefectures = [...demoPrefectures];
const mockPopulationData = [...demoPopulationData];

jest.mock('.,/../../api/fetchPopulationData', () => jest.fn());

describe('PopulationGraphFrame', () => {
  beforeEach(() => {
    (fetchPopulationData as jest.Mock).mockResolvedValue(mockPopulationData);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  // 正しい人口データをフェッチすることを確認
  it('renders correctly and fetches population data', async () => {
    render(<PopulationGraphFrame prefectures={mockPrefectures} />);

    expect(screen.getByText('総人口')).toBeVisible();
    expect(screen.getByText('年少人口')).toBeVisible();
    expect(screen.getByText('生産年齢人口')).toBeVisible();
    expect(screen.getByText('老年人口')).toBeVisible();

    await waitFor(() => {
      expect(fetchPopulationData).toHaveBeenCalledWith(mockPrefectures);
    });
  });

  // データの取得エラー時の挙動
  it('handles fetch errors gracefully', async () => {
    (fetchPopulationData as jest.Mock).mockRejectedValue(new Error('Fetch error'));

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<PopulationGraphFrame prefectures={mockPrefectures} />);
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Could not get data');
    });

    alertMock.mockRestore();
  });
});
