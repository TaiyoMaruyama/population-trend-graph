import { render, screen } from '@testing-library/react';
import React from 'react';
import { PopulationTabId } from '@/types/resas';
import { populationData } from '@/utils/createPopulationData';
import PopulationGraph from './PopulationGraph';
import '@testing-library/jest-dom';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mocking recharts
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

describe('PopulationGraph', () => {
  const mockPopulationData = [...populationData];

  it('renders the population graph with data', async () => {
    render(
      <PopulationGraph
        populationData={mockPopulationData}
        tabValue={PopulationTabId.TotalPopulation}
      />
    );

    // グラフが描画されるのを待ちます
    const svgElement = await screen.findByTestId('population-graph');
    expect(svgElement).toBeInTheDocument();
  });

  it('handles empty population data', () => {
    render(<PopulationGraph populationData={[]} tabValue={PopulationTabId.TotalPopulation} />);

    // Ensure that the graph can handle empty data gracefully
    expect(screen.queryByText('(年)')).not.toBeInTheDocument();
    expect(screen.queryByText('(千人)')).not.toBeInTheDocument();
  });
});
