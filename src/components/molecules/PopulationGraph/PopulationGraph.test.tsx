import { render, screen } from '@testing-library/react';
import React from 'react';
import { PopulationTabId } from '@/types/resas';
import { demoPopulationData } from '@/utils/demoData';
import PopulationGraph from './PopulationGraph';
import '@testing-library/jest-dom';

// ResizeObserverをモック
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Rechartsをモック
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height='100%'>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

// PopulationGraphコンポーネントのテスト
describe('PopulationGraph', () => {
  const mockPopulationData = [...demoPopulationData];

  // グラフがデータを持って正しく描画されるかのテスト
  it('renders the population graph with provided data', async () => {
    render(
      <PopulationGraph
        populationData={mockPopulationData}
        tabValue={PopulationTabId.TotalPopulation}
      />
    );

    const svgElement = await screen.findByTestId('population-graph');
    expect(svgElement).toBeVisible();
  });

  // 空の人口データを扱う場合のテスト
  it('handles empty population data gracefully', () => {
    render(<PopulationGraph populationData={[]} tabValue={PopulationTabId.TotalPopulation} />);
    expect(screen.queryByText('(年)')).not.toBeInTheDocument();
    expect(screen.queryByText('(千人)')).not.toBeInTheDocument();
  });
});
