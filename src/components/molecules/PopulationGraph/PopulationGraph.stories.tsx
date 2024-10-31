import { PopulationTabId } from '@/types/resas';
import { demoPopulationData } from '@/utils/demoData';
import PopulationGraph from './PopulationGraph';
import { PopulationGraphProps } from './PopulationGraph.types';
import type { Meta, StoryObj } from '@storybook/react';

// グラフ表示のための親コンポーネント
const WrappingGraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ width: '100%', height: '80vh' }}>{children}</div>;
};

const meta: Meta<PopulationGraphProps> = {
  title: 'molecules/PopulationGraph',
  component: PopulationGraph,
  tags: ['autodocs'],
  args: {
    populationData: demoPopulationData,
    tabValue: PopulationTabId.TotalPopulation,
  },
  argTypes: {
    tabValue: {
      options: Object.values(PopulationTabId),
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TotalPopulation: Story = {
  render: (args) => {
    return (
      <WrappingGraph>
        <PopulationGraph {...args} />
      </WrappingGraph>
    );
  },
};

export const ElderlyPopulation: Story = {
  render: (args) => {
    return (
      <WrappingGraph>
        <PopulationGraph {...args} />
      </WrappingGraph>
    );
  },
  args: {
    tabValue: PopulationTabId.ElderlyPopulation,
  },
};
